const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String},
    desc: {type: String},
    price: {type: String}
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
    Product, ProductSchema
}