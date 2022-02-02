import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import AdminNavbar from './pages/admin_panel/adminHome/AdminHome';
import AdminProductList from './pages/admin_panel/adminProductList/AdminProductList.jsx';
import AdminHome from './pages/admin_panel/adminHome/AdminHome';
import AdminAddProduct from './pages/admin_panel/adminAddProduct/AdminAddProduct';
import AdminSingleProductUpdate from './pages/admin_panel/adminSingleProductUpdate/AdminSingleProductUpdate';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux'


const App = () => {

  const user = useSelector((state) => state.user.user);
  user && console.log(user)
  
  return (
    <Router>
      <Routes>
          <Route exact path="/adminSingleProductUpdate/:id" element={<AdminSingleProductUpdate/>} />
          <Route exact path="/adminAddProduct/" element={<AdminAddProduct/>} />
          <Route exact path="/adminHome" element={<AdminHome/>} />
          <Route exact path="/adminProductList" element={<AdminProductList/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products/" element={<ProductList/>} />
          <Route exact path="/products/:cat" element={<ProductList/>} />
          <Route exact path="/product/:id" element={<Product/>} />
          <Route exact path="/login" element={
            !user 
            ? <Login/> 
            : ( user.others.admin 
                ? <AdminNavbar /> 
                : <Navigate replace to="/" />
                ) } />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/shoppingcart" element={<ShoppingCart/>} />


      </Routes>
    </Router>
  );
};

export default App;
