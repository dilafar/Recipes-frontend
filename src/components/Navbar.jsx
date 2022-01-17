import React from 'react'
import {Link} from 'react-router-dom';
import {getRecipes} from '../actions/recipes'
import {useDispatch} from 'react-redux';

const Navbar = ({recipeID}) => {

    const dispatch = useDispatch();
    const refresh = ()=>{
        dispatch(getRecipes());
    }

    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded " >
          <div className="container-fluid">
            <Link to='/' className='logo'><i className='fas fa-utensils'></i>food Recipes</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                   <Link className="nav-link active home" style={{fontSize: "2rem", marginLeft: "2rem",borderRadius: ".5rem",  }} aria-current="page" to='/'>Home</Link>
                    </li>
        
        
                   <li className="nav-item">
                     <a className="nav-link disabled"></a>
                   </li>
               </ul>
           <form className="d-flex">
               {recipeID ? "":
                  <button className="btn btn-outline-success" style={{fontSize: "2rem", marginRight: "4rem"}} onClick={refresh}>Refresh</button>
                }
          </form>
          </div>
         </div>
        </nav>
            
    </div>
    )
}

export default Navbar
