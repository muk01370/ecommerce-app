import { useParams } from "react-router-dom"; // Import useParams
import Rating from "@mui/material/Rating";
import ProductZoom from "../../Components/ProductZoom";
import Button from "@mui/material/Button";
import QuantityBox from "../../Components/QuantityBox";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useContext } from "react";
import ProductModal from "../../Components/ProductModal"; 
import { myContext } from "../../App";
import { CiHeart } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip';
import RelatedProduct from "./RelatedProducts";

const ProductDetails = ({ product }) => {
    const { id, name, discountPrice, regularPrice, image } = product;
    const [activeSize, setActiveSize] = useState(null);
    const [activeTab, setActiveTab] = useState("description");
    const [reviews, setReviews] = useState([
        { name: "John Doe", review: "Amazing product! Highly recommend it." },
    ]);
    const [newReview, setNewReview] = useState({ name: "", review: "" });
    const context = useContext(myContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleAddReview = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.review) {
            setReviews([...reviews, newReview]);
            setNewReview({ name: "", review: "" }); 
        }
    };

    const handleAddToCart = () => {
        const productToAdd = { 
            id,
            name,
            price: discountPrice || regularPrice,
            image,
            quantity: 1, 
        };
        console.log("Product to add:", productToAdd); // Log the product object
        context.onAddToCart(productToAdd);
    }; // Ensure this closing brace is here

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ProductZoom />
                        </div>
                        <div className="col-md-8">
                            <h2 className="hd text-capitalize">{name}</h2>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center mr-4">
                                    <span>Brands:</span>
                                    <span className="ml-2">
                                        <b>Welch's</b>
                                    </span>
                                </div>
                                <Rating name="read-only" value={3} readOnly precision={0.5} size="small" />
                                <span className="text-light ml-2">1 review</span>
                            </div>
                            <div className="d-flex info align-items-center mb-3">
                                <span className="oldPrice lg mr-2">${regularPrice}</span>
                                <span className="netPrice text-danger lg">${discountPrice}</span>
                            </div>
                            <span className="badge badge-success">IN STOCK</span>
                            <p className="mt-3">
                                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                Class aptent taciti sociosqu ad litora torquent
                            </p>
                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight:</span>
                                <ul className="list list-inline mb-0 pl-5">
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => setActiveSize(0)}>50gm</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => setActiveSize(1)}>100gm</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => setActiveSize(2)}>200gm</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => setActiveSize(3)}>300gm</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => setActiveSize(4)}>500gm</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center">
                                <QuantityBox />
                                <Button
                                    className="btn-blue btn-lg btn-big btn-round ml-3"
                                    onClick={handleAddToCart}
                                >
                                    <FaShoppingCart />&nbsp; Add to cart
                                </Button>
                                <Tooltip title="Add to wishlist" placement="top">
                                    <Button className="addTocart-btn"><CiHeart /></Button>
                                </Tooltip>
                                <Tooltip title="Add to compare " placement="top">
                                    <Button className="addTocart-btn"><MdOutlineCompareArrows /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="product-details-box">
                        <div className="tabs">
                            <Button
                                className={`tab ${activeTab === "description" ? "active" : ""}`}
                                onClick={() => setActiveTab("description")}
                            >
                                Description
                            </Button>
                            <Button
                                className={`tab ${activeTab === "reviews" ? "active" : ""}`}
                                onClick={() => setActiveTab("reviews")}
                            >
                                Reviews
                            </Button>
                            <Button
                                className={`tab ${activeTab === "details" ? "active" : ""}`}
                                onClick={() => setActiveTab("details")}
                            >
                                Additional Details
                            </Button>
                        </div>
                        <div className="content">
                            {activeTab === "description" && (
                                <div>
                                    <h4>Product Description</h4>
                                    <p>
                                        This product is made with high-quality materials and designed to
                                        provide excellent functionality. It’s perfect for your daily
                                        needs!
                                    </p>
                                </div>
                            )}
                            {activeTab === "reviews" && (
                                <div>
                                    <h4>Customer Reviews</h4>
                                    <ul className="reviews-list">
                                        {reviews.map((review, index) => (
                                            <li key={index}>
                                                <strong>{review.name}</strong>: {review.review}
                                            </li>
                                        ))}
                                    </ul>
                                    <h5>Add a Review</h5>
                                    <form onSubmit={handleAddReview} className="review-form">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={newReview.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <textarea
                                            name="review"
                                            placeholder="Your Review"
                                            value={newReview.review}
                                            onChange={handleInputChange}
                                            rows="4"
                                            required
                                        ></textarea>
                                        <Button type="submit" className="btn-submit">
                                            Submit Review
                                        </Button>
                                    </form>
                                </div>
                            )}
                            {activeTab === "details" && (
                                <div>
                                    <h4>Additional Details</h4>
                                    <ul>
                                        <li>Weight: 1kg</li>
                                        <li>Dimensions: 20cm x 15cm x 10cm</li>
                                        <li>Material: 100% Organic Cotton</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <br/>
                    <RelatedProduct title="Related Products"/>
                    <br/>
                    <RelatedProduct title="Recently Viewed Products"/>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;
