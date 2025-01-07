const express = require("express");
const { Category } = require("../models/category");
const { Product } = require("../models/product");
const router = express.Router();
const pLimit = require("p-limit");
const cloudinary = require("../utils/cloudinary.js");
const mongoose = require("mongoose");

// Utility function to validate ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Get all products
router.get(`/`, async (req, res) => {
  try {
    const productList = await Product.find().populate("category");
    if (!productList) {
      return res
        .status(500)
        .json({ success: false, message: "No products found" });
    }
    res.status(200).send(productList);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get a single product by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: "Invalid ID format",
      success: false,
    });
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "The product with the given ID was not found",
        success: false,
      });
    }
    res.status(200).send(product);
  } catch (err) {
    res.status(500).json({
      message: "An error occurred while fetching the product",
      error: err.message,
      success: false,
    });
  }
});

// Create a new product
router.post("/create", async (req, res) => {
  try {
    const { category: categoryId, images } = req.body;

    // Validate category
    if (!isValidObjectId(categoryId)) {
      return res.status(400).json({ success: false, message: "Invalid category ID" });
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    // Validate images
    if (!images || !Array.isArray(images)) {
      return res
        .status(400)
        .json({ success: false, message: "Images are required and should be an array" });
    }

    // Upload images to Cloudinary
    const limit = pLimit(2); // Limiting concurrent uploads
    const imagesToUpload = images.map((image) =>
      limit(async () => {
        const result = await cloudinary.uploader.upload(image);
        return result; // Return the upload result
      })
    );

    const uploadStatus = await Promise.all(imagesToUpload);

    // Map the uploaded image URLs
    const imgurl = uploadStatus.map((item) => item.secure_url);

    if (!imgurl || imgurl.length === 0) {
      return res.status(500).json({ success: false, message: "Image upload failed" });
    }

    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      images: imgurl,
      brand: req.body.brand,
      regularPrice: req.body.regularPrice,
      discountPrice: req.body.discountPrice,
      category: categoryId,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      isFeatured: req.body.isFeatured,
    });

    const savedProduct = await product.save();
    res
      .status(201)
      .json({ success: true, message: "Product created successfully", product: savedProduct });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update a product
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: "Invalid ID format",
      success: false,
    });
  }

  try {
    const { images } = req.body;

    // Validate images
    if (!Array.isArray(images) || images.length === 0) {
      return res.status(400).json({
        error: "No images provided for upload.",
        success: false,
      });
    }

    const limit = pLimit(2); // Limit the concurrent uploads to 2
    const imagesToUpload = images.map((image) =>
      limit(async () => {
        const result = await cloudinary.uploader.upload(image);
        return result;
      })
    );

    const uploadStatus = await Promise.all(imagesToUpload);
    const imgurl = uploadStatus.map((item) => item.secure_url);

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        ...req.body,
        images: imgurl,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found or could not be updated",
        success: false,
      });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({
      message: "An error occurred while updating the product",
      error: err.message,
      success: false,
    });
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: "Invalid ID format",
      success: false,
    });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred while deleting the product",
      error: err.message,
      success: false,
    });
  }
});

module.exports = router;
