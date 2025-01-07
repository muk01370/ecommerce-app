const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
    },
    images: {
      type: [String], // Array of strings
      required: [true, "At least one image URL is required"],
    },
    color: {
      type: String,
      required: [true, "Color is required"],
      trim: true,
    },
  },
  { timestamps: true }
);


categorySchema.virtual('id').get (function() {
  return this._id.toHexString();
});
categorySchema.set('toJSON', {
  virtuals: true
});

// Exporting the Category Model
const Category = mongoose.model("Category", categorySchema);
module.exports = { Category };
