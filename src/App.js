import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar'; 
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import CategoryPage from './pages/categoryPage';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error';
import {ItemsProvider} from './context/ItemsContext';

function App() {
  return (
    <Router>
      <ItemsProvider>
      <div>    
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/item/:id" element={<ItemDetailContainer  />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </div>
      </ItemsProvider>
    </Router>
  );
}

export default App;
