import React from 'react'
import {useDispatch} from 'react-redux';
import {deleteRecipes} from '../../actions/recipes';

const DeleteModal = ({recipe}) => {
  const dispatch = useDispatch();
    return (
        <div>
            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#deleteModal" style={{textDecoration:"none",fontSize:"1.5rem"}}>
                    Delete
            </button>

            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteExamModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                     <div  className="modal-header bg-danger text-white">
                        <h5 className="modal-title" id="deleteModalLabel" style={{fontSize: "1.5rem"}}>Delete Recipe</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
       
                      </div>
      
                  <div className="modal-body">
                         <p style={{fontSize: "1.3rem"}}>Are you sure you want to delete the recipe? </p>
                  </div>

                  <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        <button    className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>dispatch(deleteRecipes(recipe._id))}>Yes</button>
                  </div>
    
             </div>
         </div>
      </div>
            
        </div>
    )
}

export default DeleteModal
