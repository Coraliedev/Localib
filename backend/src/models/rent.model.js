const mongoose = require("mongoose");

const rentSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const RentModel = mongoose.model("Rent", rentSchema);
module.exports = RentModel;