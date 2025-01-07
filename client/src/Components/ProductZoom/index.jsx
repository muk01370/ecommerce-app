import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductZoom = ({ productId }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: thumbSliderRef.current,
  };

  const thumbSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current,
    dots: false,
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
  };

  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const response = await fetch(`https://ecommerce-app-backend-v534.onrender.com/api/products/${productId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setImages(data.images || []); // Assuming `images` is an array in the API response
      } catch (err) {
        console.error("Failed to fetch product images:", err);
        setError("Failed to load product images. Please try again later.");
      }
    };

    if (productId) {
      fetchProductImages();
    }
  }, [productId]);

  return (
    <div className="productZoom">
      {error && <p className="text-danger">{error}</p>}
      <div className="badge badge-primary">10%</div>
      <div className="product-detail-slider">
        {/* Main Slider */}
        <div className="main-slider">
          <Slider
            {...mainSliderSettings}
            ref={(slider) => (mainSliderRef.current = slider)}
          >
            {images.map((img, index) => (
              <div key={index} className="main-slide">
                <InnerImageZoom
                  src={img}
                  zoomSrc={img}
                  zoomScale={1.5} // Adjust the zoom level
                  className="w-100"
                  alt={`Product Image ${index + 1}`}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/500x500?text=Error+Loading+Image";
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Thumbnail Slider */}
        <div className="thumbnail-slider mt-3">
          <Slider
            {...thumbSliderSettings}
            ref={(slider) => (thumbSliderRef.current = slider)}
          >
            {images.map((img, index) => (
              <div key={index} className="thumbnail-slide">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-100"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/100x100?text=Thumbnail+Error";
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductZoom;
