import * as api from '../api';


export const getRecipes = ()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchRecipe();
        dispatch({
            type : 'FETCH_ALL',
            payload : data ,
        });

    }catch(err){
            console.log(err);
    }

}


export const createRecipes = (recipe)=>async(dispatch)=>{
    try{
        const {data} = await api.createRecipe(recipe);
        dispatch({
            type : 'CREATE',
            payload : data ,
        });

        alert("Recipe Successfully Added");

       

    }catch(err){
            console.log(err);
    }

}


export const updateRecipes = (id , recipe)=>async(dispatch)=>{
    try{
        const {data} = await api.updateRecipe(id,recipe);
        dispatch({
            type : 'UPDATE',
            payload : data ,
        });
        alert("Recipe Successfully Updated");

    }catch(err){
            console.log(err);
    }

}

export const deleteRecipes = (id)=>async(dispatch)=>{
    try{
        await api.deleteRecipe(id);
        dispatch({
            type : 'DELETE',
            payload : id ,
        });

    }catch(err){
            console.log(err);
    }

}