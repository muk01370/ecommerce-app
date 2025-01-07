import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import { TiDeleteOutline } from "react-icons/ti";

const ProductUpload = ({ isDarkmode }) => {
  const [ratingsValue, setRatingsValue] = useState(2);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [brand, setBrand] = useState("");
  const [regularPrice, setRegularPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [isFeatured, setIsFeatured] = useState(false);
  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://ecommerce-app-frontend-7ifc.onrender.com/api/category");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      images: imageUrls,
      brand,
      regularPrice,
      discountPrice,
      category,
      countInStock,
      rating: ratingsValue,
      isFeatured,
    };

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("https://ecommerce-app-frontend-7ifc.onrender.com/api/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const result = await response.json();
      console.log("Product created:", result);

      // Show success message
      setSuccessMessage("Product created successfully!");

      // Reset form fields
      setName("");
      setDescription("");
      setImageUrls([]);
      setBrand("");
      setRegularPrice(0);
      setDiscountPrice(0);
      setCategory("");
      setCountInStock(0);
      setRatingsValue(2);
      setIsFeatured(false);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleAddImageUrl = () => {
    if (newImageUrl.trim() === "") {
      setError("Image URL cannot be empty.");
      return;
    }
    setImageUrls([...imageUrls, newImageUrl.trim()]);
    setNewImageUrl("");
    setError("");
  };

  const handleRemoveImageUrl = (index) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };


  const validateForm = () => {
    const errors = {};
  
    if (!name.trim()) errors.name = "Product name is required.";
    if (!description.trim()) errors.description = "Description is required.";
    if (!category) errors.category = "Category is required.";
    if (!brand.trim()) errors.brand = "Brand is required.";
    if (!regularPrice || regularPrice <= 0) errors.regularPrice = "Regular price must be greater than 0.";
    if (discountPrice < 0) errors.discountPrice = "Discount price cannot be negative.";
    if (!countInStock || countInStock < 0) errors.countInStock = "Stock must be 0 or greater.";
    if (imageUrls.length === 0) errors.imageUrls = "At least one image URL is required.";
  
    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };
  
  return (
    <main className={`p-5 w-full min-h-screen ${isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-bold ${isDarkmode ? "text-white" : "text-gray-800"}`}>
          Product Upload
        </h1>
        <span className={`font-medium ${isDarkmode ? "text-gray-300" : "text-gray-600"}`}>
          Home → Categories → Category List
        </span>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        {successMessage && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-4">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <section className="bg-white rounded-md shadow-md p-6 mb-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div className="form-group">
                  <label className="block text-gray-600 font-medium">Product Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {validationErrors.name && <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>}
                </div>
                <div className="form-group">
                  <label className="block text-gray-600 font-medium">Description</label>
                  <textarea
                    rows="4"
                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  {validationErrors.description && <p className="text-red-500 text-sm mt-1">{validationErrors.description}</p>}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="block text-gray-600 font-medium">Category</label>
                    <select
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    {validationErrors.category && <p className="text-red-500 text-sm mt-1">{validationErrors.category}</p>}
                  </div>
                  <div className="form-group">
                    <label className="block text-gray-600 font-medium">Brand</label>
                    <input
                      type="text"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                    {validationErrors.brand && <p className="text-red-500 text-sm mt-1">{validationErrors.brand}</p>}
                  </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                    <label className="block text-gray-600 font-medium">Regular Price</label>
                    <input
                      type="number"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter price"
                      value={regularPrice}
                      onChange={(e) => setRegularPrice(Number(e.target.value))}
                    />
                    {validationErrors.regularPrice && <p className="text-red-500 text-sm mt-1">{validationErrors.regularPrice}</p>}
                  </div>
                  <div className="form-group">
                    <label className="block text-gray-600 font-medium">Discount Price</label>
                    <input
                      type="number"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter price"
                      value={discountPrice}
                      onChange={(e) => setDiscountPrice(Number(e.target.value))}
                    />
                    {validationErrors.discountPrice && <p className="text-red-500 text-sm mt-1">{validationErrors.discountPrice}</p>}
                  </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="block text-gray-600 font-medium">Product Stock</label>
                    <input
                      type="number"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter stock"
                      value={countInStock}
                      onChange={(e) => setCountInStock(Number(e.target.value))}
                    />
                    {validationErrors.countInStock && <p className="text-red-500 text-sm mt-1">{validationErrors.countInStock}</p>}
                  </div>

                  <div className="form-group">
                    <label className="block text-gray-600 font-medium">Ratings</label>
                    <Rating
                      name="simple-controlled"
                      value={ratingsValue}
                      onChange={(event, newValue) => setRatingsValue(newValue)}
                    />
                  </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="form-group flex items-center gap-2">
                    <label className="block text-gray-600 font-medium">Is Featured</label>
                    <input
                      type="checkbox"
                      className="rounded-md p-2 focus:outline-none"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-3">
            <section className="bg-white rounded-md shadow-md p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Media and Publish</h2>
              <div>
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  className={`w-full p-2 rounded-md border ${isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"}`}
                />
                {validationErrors.imageUrls && <p className="text-red-500 text-sm mt-1">{validationErrors.imageUrls}</p>}
                <button
                  type="button"
                  onClick={handleAddImageUrl}
                  className="mt-2 px-4 py-2 bg-[#0858F7] text-white rounded-md"
                >
                  Add Image
                </button>
              </div>
              {imageUrls.length > 0 && (
                <div className="mt-4">
                  <p className={`${isDarkmode ? "text-white" : "text-black"}`}>Image URLs:</p>
                  <ul className="d-flex">
                    {imageUrls.map((url, index) => (
                      <li key={index} className="flex items-center gap-2 mt-2 ml-2">
                        <img src={url} alt={`Image-${index}`} className="w-40 h-40 object-cover rounded-md border" />
                        <button
                          onClick={() => handleRemoveImageUrl(index)}
                          className="text-red-500"
                        >
                          <TiDeleteOutline/>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
                Publish Product
              </button>
            </section>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ProductUpload;
