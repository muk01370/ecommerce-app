import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../../App';
import { FaCreditCard, FaPaypal, FaCcStripe } from 'react-icons/fa';
import './checkout.css';

const Checkout = () => {
  const { cart, createOrder } = useContext(myContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United Kingdom',
    paymentMethod: 'Credit Card'
  });

  const [errors, setErrors] = useState({});

  const calculateTotal = () => 
    cart.reduce((acc, item) => acc + (item.discountPrice || 0) * item.quantity, 0);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderData = {
      items: cart.map(item => ({
        product: item.id,
        quantity: item.quantity,
        price: item.discountPrice || 0
      })),
      shippingAddress: {
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        country: formData.country
      },
      paymentMethod: formData.paymentMethod,
      itemsPrice: calculateTotal(),
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: calculateTotal()
    };

    setIsLoading(true);
    setError(null);

    try {
      const createdOrder = await createOrder(orderData);
      navigate(`/order/${createdOrder._id}`);
    } catch (error) {
      setError(error.message || 'Failed to place order');
      console.error('Checkout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="shipping-form">
          <h2>Shipping Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className={errors.address ? 'error' : ''}
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className={errors.city ? 'error' : ''}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                className={errors.postalCode ? 'error' : ''}
              />
              {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
            </div>

            <div className="form-group">
              <label>Country</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
              >
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            <h2>Payment Method</h2>
            <div className="payment-methods">
              <label className={formData.paymentMethod === 'Credit Card' ? 'active' : ''}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  checked={formData.paymentMethod === 'Credit Card'}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                />
                <FaCreditCard /> Credit Card
              </label>

              <label className={formData.paymentMethod === 'PayPal' ? 'active' : ''}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  checked={formData.paymentMethod === 'PayPal'}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                />
                <FaPaypal /> PayPal
              </label>

              <label className={formData.paymentMethod === 'Stripe' ? 'active' : ''}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Stripe"
                  checked={formData.paymentMethod === 'Stripe'}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                />
                <FaCcStripe /> Stripe
              </label>
            </div>

            <button 
              type="submit" 
              className="btn-checkout"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Place Order'}
            </button>
            {error && <div className="error-message">{error}</div>}
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <img src={item.images[0]} alt={item.name} />
                <div className="item-details">
                  <span>{item.name}</span>
                  <span>Qty: {item.quantity}</span>
                  <span>${(item.discountPrice * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="total-row">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
