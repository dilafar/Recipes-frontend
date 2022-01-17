import React,{useEffect} from 'react'
import AddModal from '../modal/AddModal';
import {useSelector} from 'react-redux';
import Recipe from './recipe/Recipe'


const Recipes = ({setrecipeID}) => {

    const Recipes = useSelector((state)=>
                state.recipes     
    );

    useEffect(()=>{
        setrecipeID(null);    
    },[]);  

    return (
        <div  >
            <AddModal />
            <br/>
            <br/>

            {!Recipes.length ? <div className='col-lg-12 col-md-12 col-xl-12'><div className='alert alert-info' role="alert"><h4>No Recipes !</h4><p>No Recipes Were Found.</p></div></div>:(
                    Recipes.map((recipe)=>(
                       
                           <div className="box" key ={recipe._id}> 
                                    <Recipe recipe={recipe}  />
                           </div>
                        )))
                }
                    
                
            </div>
    )
}

export default Recipes
