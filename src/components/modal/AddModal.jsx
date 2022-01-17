import React from 'react'
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {createRecipes} from '../../actions/recipes'




const AddModal = () => {

     const dispatch = useDispatch();

    const [ recipe_name,setrecipe_name] = useState('');
    const [ingredients,setingredients] = useState('');
    const [description,setdescription] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        dispatch(createRecipes({recipe_name,ingredients,description}));
        clear();
      
      }

    const clear =()=>{

        setrecipe_name('');
        setdescription('');
        setingredients('');

      }

    
  
    return (
        <div>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal" style={{padding:"0.7rem",fontSize: "1.3rem",}}>
                Add new Recipe
            </button>
             
          <div className="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="updateExamModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                     <div  className="modal-header bg-primary text-white">
                       <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: "bold"}}>Add Recipe</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                   <div className="modal-body">
    
                <form  onSubmit={handleSubmit}>
                     <div className="form-group">
                          <label  className="form-label">Recipe name</label><br/>
            
                          <input type="text"  name="recipe_name" className="form-control" id="rname"  value={recipe_name}  onChange={(e)=> setrecipe_name(e.target.value)} placeholder="Recipe Name" required/>

                      </div>

                     <div className="form-group">
                     
                        <label  className="form-label">Ingredients ( <span style={{color: 'red'}}> * </span>Separate Ingredients by <span style={{color: 'red' , fontSize: '3rem'}}> , </span> )</label><br/>
            
                        <input type="text" name="ingredients" className="form-control" id="ingredients"  value={ingredients}  onChange={(e)=> setingredients(e.target.value.split(','))}  placeholder="Ingredients" required/>

                     </div>

                      <div  className="form-group">
                          <br/>
                         <label className="form-label">Description</label>
                         <textarea className="form-control" id="exampleFormControlTextarea1"  value={description}  onChange={(e)=> setdescription(e.target.value)}  rows="5" placeholder="Description..." required></textarea>

                      </div>

                   
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clear}>Close</button>
                    <button   data-bs-dismiss="modal" type="submit" className="btn btn-primary" disabled={!recipe_name || !ingredients || !description}>Save</button>
                    </div>


                    </form>

                    </div>
     

         

           
                   
         





   
    

     
   
    
            
 
    </div>
  </div>
</div>


            
</div>
    )
}

export default AddModal
