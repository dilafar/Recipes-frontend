export default (recipes=[] , action)=>{
    switch(action.type){
        case 'DELETE':
            return recipes.filter((recipe)=> recipe._id !== action.payload);
        case 'FETCH_ALL':
            return  action.payload;
        case 'CREATE':
            return  [...recipes , action.payload];
        case 'UPDATE':
            return  recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        default :
            return recipes;
    }

}