import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar'; 
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import CategoryPage from './pages/categoryPage';
import Shop from './pages/Shop/Shop';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <div>    
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/item/:id" element={<ItemDetailContainer  />} />
            <Route path="/shop" element={<Shop />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
