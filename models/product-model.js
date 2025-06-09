const mongoose = require("mongoose");

// ✅ Define schema using mongoose.Schema
const productSchema = new mongoose.Schema({
    image: Buffer,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0 
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String 
});

// ✅ Create model
const Product = mongoose.model("Product", productSchema);

// ✅ Export the model
module.exports = Product;
