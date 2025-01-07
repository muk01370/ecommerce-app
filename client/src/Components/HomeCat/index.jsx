import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const HomeCat = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const homeCatSliderOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 10, // Adjusted to show 5 items for better visibility
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/category"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        if (data.success) {
          setCategories(data.data); // Assuming data.data contains the categories
        } else {
          throw new Error("Failed to load categories");
        }
      } catch (err) {
        setError("Failed to load categories. Please try again later.");
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <section className="homeCat mt-4">
        <div className="container">
          <div className="homeCatHeader">
            <h3>Featured Categories</h3>
          </div>

          <div className="homeCatSlider mt-4">
          <Slider {...homeCatSliderOptions}>
            {categories.map((category) => (
                <div
                key={category._id}
                className="slick-slide"
                data-bgcolor={category.color || '#000000'}
                >
                <div
                    className="item text-center"
                    style={{
                    backgroundColor: category.color || '#000000', // Read from data-bgcolor
                    width: '100%',
                    display: 'inline-block',
                    }}
                >
                    <img src={category.images[0]} className="w-100" alt={category.name} />
                    <div className="product-ct">
                    <h6>{category.name}</h6>
                    <span className="d-block">{category.itemsCount || 0} items</span>
                    </div>
                </div>
                </div>
            ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCat;