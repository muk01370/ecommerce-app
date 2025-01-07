import React, { useState, useContext, useCallback } from 'react';
import ProductModal from '../../Components/ProductModal';
import { myContext } from '../../App'; // Import the context for cart management

const ParentComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cart, setCart } = useContext(myContext); // Use the context for cart management

  // Function to handle adding a product to the cart
  const handleAddToCart = useCallback((productToAdd) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.id === productToAdd.id);
      if (existingProductIndex >= 0) {
        // Product already in cart, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += productToAdd.quantity;
        return updatedCart;
      } else {
        // New product, add to cart
        return [...prevCart, { ...productToAdd, quantity: productToAdd.quantity }];
      }
    });
  }, [setCart]);

  // Function to close the product detail modal
  const closeProductDetail = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  // Function to open the product modal
  const openProductModal = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  return (
    <div>
      {/* Example button to open the product modal */}
      <button onClick={() => openProductModal({ id: '1', name: 'Example Product', price: 29.99, quantity: 1, discountPrice: 24.99 })}>
        Open Product Modal
      </button>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onAddToCart={handleAddToCart}
          closeProductDetail={closeProductDetail}
        />
      )}

      {/* Display cart items count */}
      <div>Cart Items: {cart.reduce((total, item) => total + item.quantity, 0)}</div>
    </div>
  );
};

export default ParentComponent;