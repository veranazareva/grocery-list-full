
import './App.css';
import image from './shopping.webp';
import imageTwo from './man.webp';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      
      <div className='container'>
          <img src={ image } alt="shopping" width="300px" />
      </div>

      <div className='container'>
          <h1>Grocery List</h1>
      </div>

      {<GroceryList />}

      <div className='container'>
          <img src={ imageTwo } alt="man" width="300px" />
      </div>
      
    </div>
  );
}

export default App;
