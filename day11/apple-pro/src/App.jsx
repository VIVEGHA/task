import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Home from "./Home";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
