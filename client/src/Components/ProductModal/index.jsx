import React, { useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoom";
import PropTypes from "prop-types";
import { myContext } from "../../App"; // Import the context for cart management

const ProductModal = ({ product = null, closeProductDetail }) => {
  const [quantity, setQuantity] = useState(1);
  const context = useContext(myContext); // Use context to access cart management

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity)); // Ensure quantity is at least 1
  };

  const handleAddToCartClick = () => {
    if (!product) return;

    const productToAdd = {
      ...product,
      quantity,
    };
    context.onAddToCart(productToAdd); // Use context to add product to cart
    closeProductDetail(); // Close modal
  };

  if (!product) {
    return null; // Don't render anything if there's no product
  }

  return (
    <Dialog open={true} onClose={closeProductDetail} className="productModal">
      {/* Close Button */}
      <Button className="close_" onClick={closeProductDetail}>
        <MdClose />
      </Button>

      {/* Product Title */}
      <h5 className="mb-1 font-weight-bold">{product.name}</h5>

      {/* Brand and Rating */}
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center mr-4">
          <span>Brand:</span>
          <span className="ml-2">
            <b>{product.brand || "Unknown Brand"}</b>
          </span>
        </div>
        <Rating
          name="read-only"
          value={product.rating || 0}
          readOnly
          precision={0.5}
          size="small"
        />
        <span className="text-light ml-2">
          {product.reviews || 0} review{product.reviews === 1 ? "" : "s"}
        </span>
      </div>

      <hr />

      {/* Product Details */}
      <div className="row mt-2 productDetailModal position-relative">
        {/* Product Image */}
        <div className="col-md-5">
          <ProductZoom productId={product.id} />
        </div>

        {/* Product Information */}
        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-3">
            {product.discountPrice && (
              <span className="oldPrice lg mr-2">
                ${product.regularPrice?.toFixed(2)}
              </span>
            )}
            <span className="netPrice text-danger lg">
              ${product.discountPrice
                ? product.discountPrice.toFixed(2)
                : product.regularPrice?.toFixed(2)}
            </span>
          </div>

          <span
            className={`badge ${product.inStock ? "badge-success" : "badge-danger"}`}
          >
            {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
          </span>

          {/* Description */}
          <p className="mt-3">
            {product.description || "No description available for this product."}
          </p>

          {/* Quantity and Add to Cart */}
          <div className="d-flex align-items-center">
            <QuantityBox value={quantity} onChange={handleQuantityChange} />
            <Button
              className="btn-blue btn-lg btn-big btn-round ml-3"
              onClick={handleAddToCartClick}
              disabled={!product.inStock}
            >
              Add to cart
            </Button>
          </div>

          {/* Wishlist and Compare */}
          <div className="d-flex align-items-center wishlist">
            <Button
              className="btn-round mt-3 wishlistBtn"
              variant="outlined"
              onClick={() => console.log("Added to Wishlist")}
            >
              <IoIosHeartEmpty />
              &nbsp;Add to Wishlist
            </Button>
            <Button
              className="btn-round mt-3 ml-3 wishlistBtn"
              variant="outlined"
              onClick={() => console.log("Added to Compare")}
            >
              <MdOutlineCompareArrows />
              &nbsp;Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    regularPrice: PropTypes.number,
    discountPrice: PropTypes.number,
    inStock: PropTypes.bool,
    description: PropTypes.string,
  }),
  closeProductDetail: PropTypes.func.isRequired,
};

export default ProductModal;