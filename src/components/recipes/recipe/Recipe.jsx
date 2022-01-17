import React from 'react'
import DeleteModal from '../../modal/DeleteModal'
import {Link} from 'react-router-dom';


const Recipe = ({recipe}) => {
    return (
            <div>
            <div className="card background" style={{width: "72rem" ,boxShadow: "0 0.5rem 1rem rgba(0,0,0,.1)"}}>
                <div className="card-body">
                <Link to={`/recipe/${recipe._id}`}  style={{textDecoration:"none" }}> <h5 className="card-text linkhover" style={{margin: "2rem 2rem 4rem 2rem" ,fontSize: "4rem",color: "#666",fontWeight: "bold"}}>{recipe.recipe_name}</h5></Link>
       
                         <div  style={{ display : "flex", gap: "1rem" , justifyContent: "flex-end"}}>
                             <div>
                             <button type="button" className="btn btn-outline-primary"   >
                             <Link to={`/recipe/update/${recipe._id}`} style={{textDecoration:"none",fontSize:"1.5rem"}}>  update  </Link>  
                                </button>
                             </div>

                             <div>
                             <DeleteModal recipe={recipe}/>
                             </div>

                            
                             
             
                            

                         </div>
                         
                            

             
                     </div>
            </div>
            <br/>
            </div>
            
    
    )
}

export default Recipe
