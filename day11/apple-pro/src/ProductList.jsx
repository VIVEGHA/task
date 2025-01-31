import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import "./ProductList.css";

const FakeAPI = () => {
  return Promise.resolve([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
    { id: 5, name: "Product " },
  ]);
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    FakeAPI().then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
        <button onClick={() => setSearchTerm("")} className="button">
          Clear Search
        </button>
      </div>
      <ul className="list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="listItem">
            {product.name}
            <button
              className="addToCartButton"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
