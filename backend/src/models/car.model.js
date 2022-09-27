const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
    minLenght: 3,
    maxLenght: 50,
  },
  model: {
    type: String,
    required: true,
    trim: true,
    minLenght: 3,
    maxLenght: 50,
  },
  matriculation: {
    type: String,
    required: true,
    trim: true,
    minLenght: 3,
    maxLenght: 50,
    unique: true,
  },
  state: {
    type: String,
    enum: ["A", "B", "C", "D"],
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  locationPrice: {},
  type: {
    type: String,
    enum: ["Voiture", "Camion", "Moto", "Utilitaire"],
    required: true,
  },
});

const CarModel = mongoose.model("Car", carSchema);
module.exports = CarModel;
