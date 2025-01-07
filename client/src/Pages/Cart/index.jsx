import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { myContext } from "../../App";

const Cart = () => {
  const { cart, setCart } = useContext(myContext); // Use context for cart management
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + (item.discountPrice || 0) * item.quantity, 0);

  const calculateSubtotal = (item) => (item.discountPrice || 0) * item.quantity;

  const getShippingCost = () => 0; // Assuming free shipping for now

  const getTotalCost = () => calculateTotal() + getShippingCost();

  return (
    <div className="cart-page mt-4">
      <h1 className="mb-0">Your Cart</h1>
      <p>
        There {cart.length === 1 ? "is" : "are"} <b>{cart.length}</b>{" "}
        product{cart.length === 1 ? "" : "s"} in your cart
      </p>
      {cart.length > 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="cart-table">
                <div className="cart-header">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Subtotal</span>
                  <span>Action</span>
                </div>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-product">
                      <img src={item.images[0]} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                    <span className="cart-item-price">
                      ${item.discountPrice ? item.discountPrice.toFixed(2) : "0.00"}
                    </span>
                    <div className="cart-item-quantity">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <span className="cart-item-subtotal">
                      ${calculateSubtotal(item).toFixed(2)}
                    </span>
                    <button
                      className="cart-item-remove"
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="cart-summary">
                <h3>Cart Summary</h3>
                <hr />
                <div className="summary-details">
                  <span>Subtotal:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="summary-details">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="summary-details">
                  <span>Estimate for:</span>
                  <span>United Kingdom</span>
                </div>
                <div className="summary-details">
                  <span>Total:</span>
                  <span>${getTotalCost().toFixed(2)}</span>
                </div>
                <button 
                  className="btn-checkout" 
                  aria-label="Proceed to checkout"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout &nbsp;
                  <MdOutlineShoppingCartCheckout />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <p>Start adding products to your cart to see them here.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
