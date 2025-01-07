import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from "../ProductModal";
import Slider from "react-slick";
import Button from "@mui/material/Button";

const ProductItem = ({ itemView }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productSliderOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const viewProductDetail = (product) => {
    setSelectedProduct(product);
    setIsOpenProductModal(true);
  };

  const closeProductDetail = () => {
    setIsOpenProductModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          userId: 1, // Replace with actual user ID
          quantity: 1,
        }),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();
      alert("Product added to cart successfully!");
    } catch (err) {
      console.error("Failed to add product to cart:", err);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        setProducts(data || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <Slider {...productSliderOptions}>
        {products.map((product) => (
          <div key={product.id} className={`productItem ${itemView || ""}`}>
            <div className="imgWrapper">
              <img
                src={product.images?.[0] || "https://via.placeholder.com/346x310"}
                alt={product.name || "Product Image"}
                className="w-100"
              />
              {product.discountPrice && (
                <span className="badge badge-primary">
                  {((1 - product.discountPrice / product.regularPrice) * 100).toFixed(0)}%
                </span>
              )}
              <div className="actions">
                <Button
                  onClick={() => viewProductDetail(product)}
                  className="action-button"
                  title="View Product Details"
                >
                  <TfiFullscreen />
                </Button>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="action-button"
                  title="Add to Cart"
                >
                  <IoIosHeartEmpty />
                </Button>
              </div>
            </div>
            <div className="info">
              <h4>{product.name || "Unknown Product"}</h4>
              <span className="text-success d-block">
                {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
              </span>
              <Rating
                className="mt-2 mb-2"
                name="read-only"
                value={product.rating || 0}
                readOnly
                size="small"
                precision={0.5}
              />
              <div className="d-flex align-items-center">
                {product.discountPrice && (
                  <span className="oldPrice text-muted mr-2">
                    ${product.regularPrice?.toFixed(2) || "0.00"}
                  </span>
                )}
                <span className="netPrice text-danger">
                  ${product.discountPrice
                    ? product.discountPrice.toFixed(2)
                    : product.regularPrice?.toFixed(2) || "0.00"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {isOpenProductModal && (
        <ProductModal
          product={selectedProduct}
          closeProductDetail={closeProductDetail}
          onAddToCart={(productToAdd) => {
            handleAddToCart(productToAdd);
          }}
        />
      )}
    </>
  );
};

export default ProductItem;
