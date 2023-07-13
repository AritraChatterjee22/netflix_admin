import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
// import { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import { ClassNameConfigurator } from "@mui/base";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element= <Home/> />
          <Route path="/users" element=<UserList/> />
          <Route path="/user/:userId" element=<User/> />
          <Route path="/newUser" element=<NewUser/> />
          <Route path="/products" element=<ProductList/> />
          <Route path="/product/:productsId" element=<Product/> />
          <Route path="/newProduct" element=<NewProduct/> />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
