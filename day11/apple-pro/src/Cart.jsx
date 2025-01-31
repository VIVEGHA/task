import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";


function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div className="container">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="list">
                        {cart.map((item) => (
                            <li key={item.id} className="listItem">
                                {item.name}
                                <button
                                    className="removeFromCartButton"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart} className="clearCartButton">
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;
