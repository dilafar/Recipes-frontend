import {useEffect , useState} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Recipes from './components/recipes/Recipes';
import {getRecipes} from './actions/recipes'
import RecipeDetails from './components/RecipeDetails';
import UpdateRecipe from './components/UpdateRecipe';


function App() {
  const [recipeID , setrecipeID] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
          dispatch(getRecipes());
  },[dispatch])

  return (
    <div >
      <Router>
     
      <Navbar recipeID={recipeID}/>
      
      <div className='container'>
      
        <Routes>
        <Route path='/'  element={ <Recipes setrecipeID={setrecipeID}/>}/>
        <Route path='/recipe/:id'  element={ <RecipeDetails recipeID={recipeID} setrecipeID={setrecipeID}/>}/>
        <Route path='/recipe/update/:id'  element={ <UpdateRecipe />}/>
             
        </Routes>
       
      </div>

      </Router>
     
    </div>
  );
}

export default App;
