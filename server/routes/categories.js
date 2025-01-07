const express = require("express");
const { Category } = require("../models/category");
const router = express.Router();

const pLimit = require('p-limit');
const cloudinary = require('../utils/cloudinary.js');


// Get All Categories
router.get("/", async (req, res) => {
  try {
    const categoryList = await Category.find();
    if (!categoryList.length) {
      return res.status(404).json({ success: false, message: "No categories found" });
    }
    res.status(200).json({ success: true, data: categoryList });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


router.get('/:id', async(req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(500).json({
      message: "the category with the given ID was not found"
    })
  }
  return res.status(200).send(category);
});


router.delete('/:id', async(req, res) => {
  const deletedUser = await Category.findByIdAndDelete(req.params.id);

  if (!deletedUser) {
    res.status(404).json({
      message: "category not find!",
      success: false
    })
  }
  res.status(200).json({
    success: true,
    message: "Category deleted"
  })
})


router.put('/:id', async(req, res) => {
  

  const limit = pLimit(2);
    const imagesToUpload = req.body.images.map((image) =>
      limit(async () => {
        const result = await cloudinary.uploader.upload(image);
        return result; // Return the upload result
      })
    );

    // Wait for all uploads to complete
    const uploadStatus = await Promise.all(imagesToUpload);

    // Map the uploaded image URLs
    const imgurl = uploadStatus.map((item) => item.secure_url);

    if (!imgurl || imgurl.length === 0) {
      return res.status(500).json({
        error: "Image upload failed!",
        status: false,
      });
    }

    
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      images: imgurl,
      color: req.body.color,
    },
    {new:true}
  )

  if (!category) {
    return res.status(500).json({
      message: "Category cannot updated",
      success: false
    })
  }
  res.send(category);
})

// Add a New Category

router.post('/create', async (req, res) => {
  try {
    // Limit concurrent uploads to 2
    const limit = pLimit(2);
    const imagesToUpload = req.body.images.map((image) =>
      limit(async () => {
        const result = await cloudinary.uploader.upload(image);
        return result; // Return the upload result
      })
    );

    // Wait for all uploads to complete
    const uploadStatus = await Promise.all(imagesToUpload);

    // Map the uploaded image URLs
    const imgurl = uploadStatus.map((item) => item.secure_url);

    if (!imgurl || imgurl.length === 0) {
      return res.status(500).json({
        error: "Image upload failed!",
        status: false,
      });
    }

    // Create a new category
    let category = new Category({
      name: req.body.name,
      images: imgurl,
      color: req.body.color,
    });

    // Save the category to the database
    category = await category.save();

    return res.status(201).json(category);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({
      error: err.message || "Internal server error",
      status: false,
    });
  }
});


module.exports = router;
