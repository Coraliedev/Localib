const mongoose = require("mongoose");
const { isEmail } = require("validator");

const clientSchema = mongoose.Schema({
  lastname: {
    type: String,
    required: true,
    trim: true,
    minLenght: 3,
    maxLenght: 50,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    minLenght: 3,
    maxLenght: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minLenght: 10,
    maxLenght: 10,
  },
  birthdate: {
    type: Date,
    required: true,
  },
});

const ClientModel = mongoose.model("Client", clientSchema);
module.exports = ClientModel;
