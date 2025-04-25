//import mongoose
const mongoose = require('mongoose');


//Defing Product Schema
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter Product name']
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        }
    },

    {
        timestamps: true //Provide timestamp for every creation
    }
)



//Export this ProductSchema as a model by giving a name as Product which was stored in "Product" variable
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;