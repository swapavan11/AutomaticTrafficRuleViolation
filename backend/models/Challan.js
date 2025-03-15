const mongoose = require("mongoose");

const ChallanSchema = new mongoose.Schema({
  date: Date,
  vehicleNo: String,
  challanCategory: String,
  vehicleCategory: String,
  amount: Number,
  location: String,
  time: String,
});

module.exports = mongoose.model("Challan", ChallanSchema);
