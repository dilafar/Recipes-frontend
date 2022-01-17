import React from 'react'
import {useState , useEffect} from 'react';
import { useParams} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import {updateRecipes} from '../actions/recipes'

const UpdateRecipe = () => {

  const dispatch = useDispatch();

    const [ recipe_name,setrecipe_name] = useState('');
    const [ingredients,setingredients] = useState('');
    const [description,setdescription] = useState('');

    const {id} = useParams();
    const recipe = useSelector((state)=> id ? state.recipes.find((p)=> p._id === id ): null);
   

    useEffect(()=>{
      if(recipe){
        setrecipe_name(recipe.recipe_name);
        setingredients(recipe.ingredients);
        setdescription(recipe.description);
          
      }
    },[recipe]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateRecipes(id,{recipe_name,ingredients,description}));
        clear();
    }

    const clear =()=>{
      setrecipe_name('');
      setdescription('');
      setingredients('');
    }


    return (
        <div>


            <div class="card" style={{width: "72rem", height : "50rem"}}>
            <div class="card-body">
             
              <div className="modal-dialog" style={{marginRight: "37.6rem"}}>
                  <div className="modal-content" style={{width: "68rem", height : "40rem" , }}>
                     <div  className="modal-header bg-primary text-white">
                         <h5 className="modal-title" id="exampleModalLabel" style={{fontSize:"2rem",fontWeight:"bold",marginBottom:".5rem"}}>Update Recipe</h5>
                        
                      </div>
                   <div className="modal-body">
    
                    <form  onSubmit={handleSubmit}>

                    <div className="form-group">
                          <label  className="form-label">Recipe name</label><br/>
            
                          <input type="text"  name="examID" className="form-control" id="eid"  value={recipe_name}  onChange={(e)=> setrecipe_name(e.target.value)} placeholder="ExamID" required/>

                     </div>

                     <div className="form-group">
                    
                     <label  className="form-label">Ingredients ( <span style={{color: 'red'}}> * </span>Separate Ingredients by <span style={{color: 'red' , fontSize: '3rem'}}> , </span> )</label><br/>
            
                    <input type="text" name="key" className="form-control" id="key"  value={ingredients}  onChange={(e)=> setingredients(e.target.value)}  placeholder="Key" required/>

                    </div>

                    <div  className="form-group">

                    <br/>
                         <label className="form-label">Description</label>
                         <textarea className="form-control" id="exampleFormControlTextarea1"  value={description}  onChange={(e)=> setdescription(e.target.value)}  rows="5" required></textarea>
                   
                      

                    </div>

                
                      <div className="modal-footer">
                           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{fontSize:"1.3rem",padding:".5rem"}} onClick={clear}>Clear</button>
                            <button   data-bs-dismiss="modal" type="submit" className="btn btn-primary" style={{fontSize:"1.3rem",padding:".5rem"}} disabled={!recipe_name || !ingredients || !description}>Update</button>
                      </div>


                    </form>

                </div>
            </div>
            
          </div>
         
          </div>
        </div>
      </div>
        
    )
}

export default UpdateRecipe
