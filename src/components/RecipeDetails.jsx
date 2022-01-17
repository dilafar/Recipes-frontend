import React ,{useEffect} from 'react'
import { useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

const RecipeDetails = ({recipeID , setrecipeID}) => {

                const {id} = useParams();

                 const recipe = useSelector((state)=> id ? state.recipes.find((p)=> p._id === id ): null);

                useEffect(()=>{
                         setrecipeID(id);    
                },[recipe]);
   
    
                 return (
                     <div>
                             <div className="card background" style={{width: "72rem", height : "50rem"}}>
                                <h5 className="card-title modal-header bg-primary text-white" style={{fontSize:"2rem",fontWeight:"bold",marginBottom:"2rem"}}>Recipe Details</h5>
                             <div className="card-body" style={{marginLeft: "5rem"}}>
           
                            <h3 className="gap" style={{fontSize : "2rem" , fontWeight:"bold"}}>Recipe name : </h3>
                            <h4 className="gap" style={{marginLeft: "2rem"}}>{recipe.recipe_name}</h4>
                            <h3 className="gap">Ingredients : </h3>
                             <ul>
                                    {recipe.ingredients.map((ing) => 
                             <li className="gap">{ing}</li>
                                 )}
                             </ul>
                             <h3 className="gap">Description : </h3>
                              <h4 className="gap" style={{marginLeft: "2rem" , maxWidth:"53rem"}}>{recipe.description}</h4>


            

    
                            </div>
                        </div>

            
                    </div>
    )
}

export default RecipeDetails
