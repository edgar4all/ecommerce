import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div >    
    <NavBar />
    <ItemListContainer greeting="Welcome my friend!" />
    </div>
  );
}

export default App;
