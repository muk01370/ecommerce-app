import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import PaginationItem from "../../components/PaginationItem";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";

const Category = ({ isDarkmode, setIsChecked }) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const itemsPerPage = 10;

  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://ecommerce-app-backend-v534.onrender.com/api/category");
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

    fetchCategories();
  }, []);

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const displayedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentCategory(null);
  };

  const editCategory = (category) => {
    setCurrentCategory(category);
    setOpen(true);
  };

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`https://ecommerce-app-backend-v534.onrender.com/api/category/${categoryId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete category");
      }
      setCategories(categories.filter((cat) => cat._id !== categoryId)); // Use _id for filtering
    } catch (err) {
      setError("Failed to delete category. Please try again later.");
      console.error("Error deleting category:", err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        currentCategory
          ? `https://ecommerce-app-backend-v534.onrender.com/api/category/${currentCategory._id}` // Use _id for PUT
          : "https://ecommerce-app-backend-v534.onrender.com/api/category",
        {
          method: currentCategory ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formJson.name,
            images: [formJson.images], // Ensure images is an array
            color: formJson.color,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save category");
      }
      const updatedCategory = await response.json();

      if (currentCategory) {
        setCategories((prev) =>
          prev.map((cat) => (cat._id === updatedCategory._id ? updatedCategory : cat))
        );
      } else {
        setCategories((prev) => [...prev, updatedCategory]);
      }

      handleClose();
    } catch (err) {
      setError("Failed to save category. Please try again later.");
      console.error("Error saving category:", err);
    }
  };

  return (
    <>
      <div
        className={`p-[20px] w-full min-h-screen ${isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-[20px]">
          <h1 className={`text-2xl font-bold ${isDarkmode ? "text-white" : "text-gray-800"}`}>
            Category List
          </h1>
          <span className={`font-inter font-medium ${isDarkmode ? "text-gray-300" : "text-gray-600"}`}>
            Home → Categories → Category List
          </span>
        </div>

        {/* Table */}
        <div
          className={`${isDarkmode ? "bg-[#112143]" : "bg-white"} w-full sm:p-[20px] p-[10px] py-[20px] rounded-md shadow-sm hover:shadow-lg transition-all duration-200 ease-in-out`}
        >
          <div className="w-full flex justify-between items-center">
            <h1 className={`font-inter sm:text-lg text-base ${isDarkmode ? "text-white" : "text-black"} font-bold`}>
              Category List
            </h1>
            <BsThreeDots
              className={`${isDarkmode ? "text-white" : "text-black"} opacity-60 sm:text-2xl text-lg cursor-pointer`}
            />
          </div>

          {/* Table Header */}
          <div className={`w-full mt-4 flex h-[50px] ${isDarkmode ? "bg-[#1F67FE]" : "bg-[#1F67FE]"}`}>
            <div className="w-[100px] h-full px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
              <input
                type="checkbox"
                className="w-[26px] h-[16px] accent-[#216AF8]"
                onChange={handleChecked}
              />
              <h1 className="uppercase text-sm font-inter font-bold text-white">uid</h1>
            </div>
            <div className="w-[380px] h-full px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
              <h1 className="uppercase text-xs font-inter font-bold text-white">Category</h1>
            </div>
            <div className="w-[220px] h-full px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
              <h1 className="uppercase text-xs font-inter font-bold text-white">Image</h1>
            </div>
            <div className="w-[200px] h-full px-[10px] flex items-center gap-[5px] border-r-[1px] border-white border-opacity-20">
              <h1 className="uppercase text-xs font-inter font-bold text-white">Color</h1>
            </div>
            <div className="w-[250px] h-full px-[10px] flex items-center gap-[5px]">
              <h1 className="uppercase text-xs font-inter font-bold text-white">Action</h1>
            </div>
          </div>

          {/* Categories List */}
          {displayedCategories.map((category, index) => {
            const actualIndex = (currentPage - 1) * itemsPerPage + index + 1;
            return (
              <div
                key={category._id}
                className={`w-full flex h-[70px] ${index % 2
                  ? isDarkmode
                    ? "bg-[#071739]"
                    : "bg-[#F8F8F8]"
                  : "bg-transparent"
                  } border-b-[1px] border-opacity-10 ${isDarkmode ? "border-white" : "border-black"
                  } transition-all duration-200 ease-in-out`}
              >
                <div
                  className={`w-[100px] h-full px-[10px] flex items-center gap-[5px] border-r-[1px] ${isDarkmode ? "border-white" : "border-black"
                    }`}
                >
                  <input type="checkbox" className="w-[26px] h-[16px] accent-[#216AF8]" />
 <h1
                    className={`text-sm font-inter font-bold ${isDarkmode ? "text-gray-300" : "text-gray-500"
                      }`}
                  >
                    #{actualIndex} {/* Use the calculated actual index */}
                  </h1>
                </div>

                <div
                  className={`w-[380px] h-full px-[10px] flex items-center gap-[5px] border-r-[1px] ${isDarkmode ? "border-white" : "border-black"
                    }`}
                >
                  <h1
                    className={`text-sm font-inter font-bold ${isDarkmode ? "text-white" : "text-black"
                      }`}
                  >
                    {category.name}
                  </h1>
                </div>

                <div
                  className={`w-[220px] h-full px-[10px] flex items-center gap-[5px] border-r-[1px] ${isDarkmode ? "border-white" : "border-black"
                    }`}
                >
                  <img
                    src={category.images[0]} // Assuming images is an array
                    alt="category"
                    className="w-[40px] h-[40px] rounded-md"
                  />
                </div>

                <div
                  className={`w-[200px] h-full px-[10px] flex items-center gap-[5px] border-r-[1px] ${isDarkmode ? "border-white" : "border-black"
                    }`}
                >
                  <h1
                    className={`text-sm font-inter font-normal ${isDarkmode ? "text-gray-300" : "text-gray-500"
                      }`}
                  >
                    {category.color}
                  </h1>
                </div>

                <div className="w-[250px] h-full px-[10px] flex items-center gap-[5px]">
                  <div className="flex gap-[10px] items-center">
                    <div className="w-[35px] h-[35px] bg-green-200 flex justify-center items-center rounded-md cursor-pointer">
                      <Button onClick={() => editCategory(category)}>
                        <HiPencil className="text-lg text-green-800" />
                      </Button>
                    </div>
                    <div className="w-[35px] h-[35px] bg-red-200 flex justify-center items-center rounded-md cursor-pointer">
                      <FaTrash
                        className="text-base text-red-800"
                        onClick={() => deleteCategory(category._id)} // Use _id for deletion
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="w-full h-[60px] mt-[20px] flex justify-between sm:flex-row flex-col items-center gap-[10px]">
          <h1 className={`${isDarkmode ? "text-white" : "text-black"} font-inter text-sm font-normal`}>
            Showing <span className="font-bold">{displayedCategories.length}</span> of <span className="font-bold">{categories.length}</span> Results
          </h1>
          <div className="h-full flex items-center gap-[5px]">
            <PaginationItem
              isDarkmode={isDarkmode}
              Icon={RiArrowDropLeftLine}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem
                key={index}
                isDarkmode={isDarkmode}
                page={index + 1} // Pass the page number
                active={currentPage === index + 1} // Highlight the current page
                onClick={() => handlePageChange(index + 1)} // Navigate to the selected page
              />
            ))}

            <PaginationItem
              isDarkmode={isDarkmode}
              Icon={RiArrowDropRightLine}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </div>
        </div>

      </div>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>{currentCategory ? "Edit Category" : "Add Category"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Category Name"
            type="text"
            fullWidth
            defaultValue={currentCategory?.name || ""}
          />

          <TextField
            required
            margin="dense"
            id="images" 
            name="images"
            label="Category Image (comma separated)"
            type="text"
            fullWidth
            defaultValue={currentCategory?.images.join(", ") || ""}
          />

          <TextField
            required
            margin="dense"
            id="color"
            name="color"
            label="Category Color"
            type="text"
            fullWidth
            defaultValue={currentCategory?.color || ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
          <Button type="submit" variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Category;
