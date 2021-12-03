import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products/" element={<ProductList/>} />
          <Route exact path="/products/:cat" element={<ProductList/>} />
          <Route exact path="/product/:id" element={<Product/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/cart" element={<ShoppingCart/>} />


      </Routes>
    </Router>
  );
};

export default App;
