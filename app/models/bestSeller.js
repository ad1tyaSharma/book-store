const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bestSellerSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: String, required: true },
});

module.exports = mongoose.model("BestSeller", bestSellerSchema);
