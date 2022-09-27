const RentModel = require("../models/rent.model");

// Create and Save a new Rent
module.exports.createRent = (req, res) => {
  // Create a Rent
  const rent = new RentModel({
    client: req.body.client,
    vehicle: req.body.vehicle,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    price: req.body.price,
  });

  // Save Rent in the database
  RentModel.create(rent, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  });
};