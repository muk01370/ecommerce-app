import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoryAdd = ({ isDarkmode, categoryId }) => {
  const [name, setName] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [color, setColor] = useState("#000000");
  const [customColor, setCustomColor] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Success message
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Fetch category data when editing
  useEffect(() => {
    const fetchCategory = async () => {
      if (categoryId) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://ecommerce-app-backend-v534.onrender.com/api/category/${categoryId}`
          );
          if (!response.ok) {
            throw new Error(`Error fetching category: ${response.statusText}`);
          }
          const category = await response.json();
          setName(category.name || "");
          setImageUrls(category.images || []);
          setColor(category.color || "#000000");
          setCustomColor(category.color || "");
          setSuccessMessage(""); // Clear previous success message
        } catch (err) {
          console.error(err);
          setError("Failed to load category data.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCategory();
  }, [categoryId]);

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

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setCustomColor("");
  };

  const handleCustomColorChange = (e) => {
    const value = e.target.value;
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      setColor(value);
      setError("");
    } else {
      setError("Invalid color code. Use a format like #RRGGBB.");
    }
    setCustomColor(value);
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Category name is required.");
      return;
    }
    if (imageUrls.length === 0) {
      setError("At least one image URL is required.");
      return;
    }

    try {
      const url = categoryId
        ? `https://ecommerce-app-backend-v534.onrender.com/api/category/${categoryId}`
        : "https://ecommerce-app-backend-v534.onrender.com/api/category/create";
      const method = categoryId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, images: imageUrls, color }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Category saved:", result);

      setSuccessMessage("Category saved successfully!");
      setError("");
    } catch (err) {
      setError("An error occurred while saving the category.");
      console.error("Error:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  return (
    <div
      className={`w-full h-auto p-5 ${isDarkmode ? "bg-[#071739]" : "bg-white"} 
      transition-all duration-200`}
    >
      <h1 className={`text-2xl font-bold ${isDarkmode ? "text-white" : "text-[#403E57]"}`}>
        {categoryId ? "Edit Category" : "Add Category"}
      </h1>

      {/* Form Section */}
      <div className="mt-5 grid grid-cols-1 gap-5">
        <div className={`p-5 rounded-md shadow-sm ${isDarkmode ? "bg-[#112143]" : "bg-[#F9F9F9]"}`}>
          {/* Category Name */}
          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-2 rounded-md border ${isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"}`}
          />

          {/* Color Picker */}
          <div className="mt-4">
            <label className={`${isDarkmode ? "text-white" : "text-black"} block mb-2`}>
              Select or Enter Color:
            </label>
            <div className="flex items-center gap-4">
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className="w-10 h-10 border-none cursor-pointer"
              />
              <input
                type="text"
                placeholder="#RRGGBB"
                value={customColor}
                onChange={handleCustomColorChange}
                className={`p-2 rounded-md border ${isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"}`}
              />
              <span className={`${isDarkmode ? "text-white" : "text-black"}`}>{color.toUpperCase()}</span>
            </div>
          </div>

          {/* Image URLs */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Image URL"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              className={`w-full p-2 rounded-md border ${isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"}`}
            />
            <button
              type="button"
              onClick={handleAddImageUrl}
              className="mt-2 px-4 py-2 bg-[#0858F7] text-white rounded-md"
            >
              Add Image
            </button>
          </div>

          {imageUrls.length > 0 && (
            <div className="mt-5">
              <p className={`${isDarkmode ? "text-white" : "text-black"}`}>Image URLs:</p>
              <ul>
                {imageUrls.map((url, index) => (
                  <li key={index} className="flex items-center gap-2 mt-2">
                    <img src={url} alt={`Image-${index}`} className="w-20 h-20 object-cover rounded-md" />
                    <button
                      onClick={() => handleRemoveImageUrl(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Error & Success Messages */}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}

      {/* Submit Button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-[#0858F7] text-white rounded-md"
        >
          {categoryId ? "Update Category" : "Create Category"}
        </button>
      </div>
    </div>
  );
};

export default CategoryAdd;
