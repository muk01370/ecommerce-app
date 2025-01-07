const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of strings
    required: [true, "At least one image URL is required"],
  },
  brand: {
    type: String,
    default: "",
  },
  regularPrice: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category is required and must be a valid ObjectId"],
  },
  countInStock: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  inStock: {
    type: Boolean,
    default: true, // Default to true if not specified
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Virtual for id
productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
productSchema.set("toJSON", {
  virtuals: true,
});

// Model validation helper for queries
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Export the model and validation helper
exports.Product = mongoose.model("Product", productSchema);
exports.isValidObjectId = isValidObjectId;
