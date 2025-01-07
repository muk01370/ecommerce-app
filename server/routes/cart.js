const express = require("express");
const { Cart } = require("../models/cart"); // Assuming a Cart model exists
const router = express.Router();

// Add product to cart
router.post("/", async (req, res) => {
  const { productId, userId, quantity } = req.body;

  // Validate input data
  if (!productId || !userId || !quantity || quantity <= 0) {
    return res.status(400).json({ success: false, message: "Invalid input data." });
  }

  try {
    // Check if the cart for the user already exists
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItem = cart.items.find(item => item.productId === productId);

    if (existingItem) {
      // Update the quantity if the product is already in the cart
      existingItem.quantity += quantity;
    } else {
      // Add new product to the cart
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json({ success: true, message: "Product added to cart", cart });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get("/:userId", async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId }).populate('items.productId');
        console.log( cart );
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});
