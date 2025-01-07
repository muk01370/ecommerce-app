import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { FaEye, FaTrash } from "react-icons/fa";
import PaginationItem from "../../components/PaginationItem";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, MenuItem } from "@mui/material";

const ProductList = ({ isDarkmode }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data || []); // Update the product state
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to load products. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/api/category");
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.success) {
        setCategories(data.data);
      } else {
        throw new Error("Failed to fetch categories");
      }
    } catch (err) {
      setError("Failed to load categories. Please try again later.");
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };


  const totalPages = Math.ceil(products.length / resultsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProduct(null);
  };

  const editProduct = (product) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
  
    const payload = {
      name: formJson.name,
      description: formJson.description,
      images: formJson.images.split(",").map((img) => img.trim()), // Ensure images array
      brand: formJson.brand,
      regularPrice: Number(formJson.regularPrice),
      discountPrice: Number(formJson.discountPrice),
      category: formJson.category, // Category _id directly
      countInStock: Number(formJson.countInStock),
      rating: Number(formJson.rating),
    };
  
    try {
      const response = await fetch(
        currentProduct
          ? `http://localhost:5000/api/products/${currentProduct._id}`
          : "http://localhost:5000/api/products/create",
        {
          method: currentProduct ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
  
      if (!response.ok) throw new Error("Failed to save product");
  
      const updatedProduct = await response.json();
  
      setProducts((prev) =>
        currentProduct
          ? prev.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
          : [...prev, updatedProduct]
      );
  
      // Fetch updated products list from the server
      await fetchProducts();
  
      handleClose();
    } catch (err) {
      console.error("Error saving product:", err);
      setError("Failed to save product. Please try again later.");
    }
  };
  
  

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Failed to delete product");
      setProducts((prev) => prev.filter((product) => product._id !== productId));
    } catch (err) {
      setError("Failed to delete product. Please try again later.");
    }
  };

  // Render loading or error state
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>

      <div
        className={`p-[20px] w-full min-h-screen ${isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-[20px]">
          <h1 className={`text-2xl font-bold ${isDarkmode ? "text-white" : "text-gray-800"}`}>
            Product List
          </h1>
          <span className={`font-inter font-medium ${isDarkmode ? "text-gray-300" : "text-gray-600"}`}>
            Home → Products → Product List
          </span>
        </div>

        {/* Table */}
        <div
          className={`${isDarkmode ? "bg-[#112143]" : "bg-white"
            } w-full sm:p-[20px] p-[10px] py-[20px] rounded-md shadow-sm hover:shadow-lg transition-all duration-200 ease-in-out`}
        >
          <div className="w-full flex justify-between items-center">
            <h1 className={`font-inter sm:text-lg text-base ${isDarkmode ? "text-white" : "text-black"} font-bold`}>
              Products
            </h1>
            <BsThreeDots
              className={`${isDarkmode ? "text-white" : "text-black"} opacity-60 sm:text-2xl text-lg cursor-pointer`}
            />
          </div>

          <div className="w-full overflow-x-scroll scrollbar">
            <div className="lg:w-[1370px] w-[1170px]">
              {/* Table Header */}
              <div className={`w-full flex h-[50px] bg-[#1F67FE]`}>
                <div className="w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
                  <input type="checkbox" className="w-[16px] h-[16px] accent-[#216AF8]" />
                  <h1 className={`uppercase text-sm font-inter font-bold text-white`}>uid</h1>
                </div>

                <div className="w-[280px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
                  <h1 className="uppercase text-xs font-inter font-bold text-white">Product</h1>
                </div>

                <div className="w-[120px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
                  <h1 className="uppercase text-xs font-inter font-bold text-white">Category</h1>
                </div>

                <div className="w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
                  <h1 className="uppercase text-xs font-inter font-bold text-white">Brand</h1>
                </div>

                <div className="w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
                  <h1 className="uppercase text-xs font-inter font-bold text-white">Price</h1>
                </div>

                <div className="w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
                  <h1 className="uppercase text-xs font-inter font-bold text-white">Stock</h1>
                </div>

                <div className="w-[120px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
                  <h1 className="uppercase text-xs font-inter font-bold text-white">Rating</h1>
                </div>

                <div className="w-[150px] h-[full] px-[10px] flex items-center gap-[5px]">
                  <h1 className="uppercase text-xs font-inter font-bold text-white">Action</h1>
                </div>
              </div>

              {/* Table Body */}
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((item, idx) => (
                  <div
                    key={item._id}
                    className={`w-full flex h-[70px] ${idx % 2 === 0
                      ? "bg-transparent"
                      : isDarkmode
                        ? "bg-[#071739]"
                        : "bg-[#F8F8F8]"
                      } border-b border-opacity-10 ${isDarkmode ? "border-white" : "border-black"
                      }`}
                  >
                    <div
                      className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-opacity-10 ${isDarkmode ? "border-white" : "border-black"
                        }`}
                    >
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] accent-[#216AF8]"
                      />
                      <h1 className={`text-sm font-inter font-bold ${isDarkmode ? "text-gray-300" : "text-gray-500"}`}>
                        #{(currentPage - 1) * resultsPerPage + (idx + 1)}
                      </h1>
                    </div>


                    <div
                      className={`w-[280px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-opacity-10 ${isDarkmode ? "border-white" : "border-black"
                        }`}
                    >
                      <div className="w-[40px] h-[40px] p-[4px] bg-white rounded-md">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full" />
                      </div>
                      <div className="flex flex-col gap-[5px]">
                        <h1
                          className={`w-[200px] truncate text-sm font-inter font-bold ${isDarkmode ? "text-white" : "text-black"
                            }`}
                        >
                          {item.name}
                        </h1>
                        <h1
                          className={`w-[200px] truncate text-xs font-inter font-bold ${isDarkmode ? "text-gray-300" : "text-gray-500"
                            }`}
                        >
                          {item.description}
                        </h1>
                      </div>
                    </div>



                    <div
                      className={`w-[120px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-opacity-10 ${isDarkmode ? "border-white" : "border-black"
                        }`}
                    >
                      <h1
                        className={`text-sm font-inter font-normal ${isDarkmode ? "text-gray-300" : "text-gray-500"
                          }`}
                      >
                        {item.category?.name || "N/A"}
                      </h1>
                      
                    </div>



                    <div
                      className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-opacity-10 ${isDarkmode ? "border-white" : "border-black"
                        }`}
                    >
                      <h1
                        className={`text-sm font-inter font-normal ${isDarkmode ? "text-gray-300" : "text-gray-500"
                          }`}
                      >
                        {item.brand}
                      </h1>
                    </div>



                    <div
                      className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
                    >
                      <div className="flex flex-col gap-[5px]">
                        {item.discountPrice != null && (
                          <h1
                            className={`text-sm font-inter line-through ${isDarkmode ? "text-gray-300" : "text-gray-500"
                              }`}
                          >
                            ${item.discountPrice}
                          </h1>
                        )}
                        <h1 className="text-base font-inter text-red-600">
                          ${item.regularPrice}
                        </h1>
                      </div>
                    </div>



                    <div
                      className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-opacity-10 ${isDarkmode ? "border-white" : "border-black"
                        }`}
                    >
                      <h1
                        className={`text-sm font-inter font-normal ${isDarkmode ? "text-gray-300" : "text-gray-500"
                          }`}
                      >
                        {item.countInStock}
                      </h1>
                    </div>




                    <div
                      className={`w-[120px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-opacity-10 ${isDarkmode ? "border-white" : "border-black"
                        }`}
                    >
                      <div className="flex items-center gap-[5px]">
                        <AiFillStar size={17} color="#EDB213" />
                        <h1
                          className={`text-base font-inter font-bold ${isDarkmode ? "text-white" : "text-black"
                            }`}
                        >
                          {item.rating || 0}
                        </h1>
                      </div>
                    </div>



                    <div className="w-[150px] h-[full] px-[10px] flex items-center gap-[5px]">
                      <div className="flex gap-[10px] items-center">
                        <div className="w-[35px] h-[35px] bg-purple-200 flex justify-center items-center rounded-md cursor-pointer">
                          <FaEye className="text-lg text-purple-800" />
                        </div>
                        <div className="w-[35px] h-[35px] bg-green-200 flex justify-center items-center rounded-md cursor-pointer">
                          <HiPencil className="text-lg text-green-800" onClick={() => editProduct(item)} />
                        </div>
                        <div className="w-[35px] h-[35px] bg-red-200 flex justify-center items-center rounded-md cursor-pointer">
                          <FaTrash className="text-base text-red-800" onClick={() => deleteProduct(item._id)} />
                        </div>
                      </div>
                    </div>


                  </div>
                ))
              ) : (
                <h1 className="text-center py-4">No products available.</h1>
              )}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="w-full h-[60px] mt-[20px] flex justify-between sm:flex-row flex-col items-center gap-[10px]">
          <h1 className={`${isDarkmode ? "text-white" : "text-black"} font-inter text-sm font-normal`}>
            Showing{" "}
            <span className="font-bold">
              {(currentPage - 1) * resultsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-bold">
              {Math.min(currentPage * resultsPerPage, products.length)}
            </span>{" "}
            of <span className="font-bold">{products.length}</span> Results
          </h1>
          <div className="h-full flex items-center gap-[5px]">
            {/* Previous Page */}
            <PaginationItem
              isDarkmode={isDarkmode}
              Icon={RiArrowDropLeftLine}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem
                key={index}
                isDarkmode={isDarkmode}
                page={index + 1}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              />
            ))}
            {/* Next Page */}
            <PaginationItem
              isDarkmode={isDarkmode}
              Icon={RiArrowDropRightLine}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </div>
        </div>
      </div>

      {/* Product Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentProduct ? "Edit Product" : "Add Product"}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField label="Name" name="name" defaultValue={currentProduct?.name || ""} fullWidth margin="normal" />
            <TextField
              label="Description"
              name="description"
              defaultValue={currentProduct?.description || ""}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Images (comma-separated URLs)"
              name="images"
              defaultValue={currentProduct?.images?.join(", ") || ""}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Brand"
              name="brand"
              defaultValue={currentProduct?.brand || ""}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Regular Price"
              name="regularPrice"
              type="number"
              defaultValue={currentProduct?.regularPrice || ""}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Discount Price"
              name="discountPrice"
              type="number"
              defaultValue={currentProduct?.discountPrice || ""}
              fullWidth
              margin="normal"
            />
            <TextField
              select
              label="Category"
              name="category"
              defaultValue={currentProduct?.category?._id || ""}
              fullWidth
              margin="normal"
            >
              {categories.length === 0 && !error ? (
                <MenuItem disabled>Loading categories...</MenuItem>
              ) : error ? (
                <MenuItem disabled>Error loading categories</MenuItem>
              ) : (
                categories.map((cat) => (
                  <MenuItem key={cat._id} value={cat._id}>
                    {cat.name}
                  </MenuItem>
                ))
              )}
            </TextField>
            <TextField
              label="Stock Count"
              name="countInStock"
              type="number"
              defaultValue={currentProduct?.countInStock || ""}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Rating"
              name="rating"
              type="number"
              defaultValue={currentProduct?.rating || 0}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">{currentProduct ? "Update" : "Create"}</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>

  );
};

export default ProductList;
