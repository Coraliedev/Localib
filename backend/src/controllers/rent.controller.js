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

// Retrieve a single Rent with rentId and populate client and vehicle
module.exports.getRentById = (req, res) => {
  RentModel.findById(req.params.id)
    .populate("client")
    .populate("vehicle")
    .exec((err, data) => {
      if (!err) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Not found Rent with id ${req.params.id}.`,
        });
      }
    });
};

// Retrieve all Rents from the database and populate client and vehicle
module.exports.getAllRents = (req, res) => {
  RentModel.find({})
    .populate("client")
    .populate("vehicle")
    .exec((err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
};
