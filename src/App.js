import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar'; 
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div>    
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
