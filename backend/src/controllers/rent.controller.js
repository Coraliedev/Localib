const RentModel = require("../models/rent.model");
const VehicleModel = require("../models/vehicle.model");

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

  // update unvaible dates of the vehicle
  VehicleModel.findByIdAndUpdate(
    req.body.vehicle,
    {
      $push: {
        unavailableDates: [req.body.startDate, req.body.endDate],
      },
    },
    function (err) {
      if (err) res.status(500).send(err);
    }
  );
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

// Delete a Rent with the specified rentId in the request
module.exports.deleteRentById = (req, res) => {
  RentModel.findByIdAndRemove(req.params.id, (err) => {
    if (!err) {
      res.send({
        message: `Rent ${req.params.id} was deleted successfully!`,
      });
    } else {
      res.status(500).send({
        message:
          `Could not delete Rent with id ${req.params.id} ` + req.params.id,
      });
    }
  });
};

// Update a Rent identified by the rentId in the request
module.exports.updateRentById = (req, res) => {
  RentModel.findByIdAndUpdate(
    req.params.id,
    {
      client: req.body.client,
      vehicle: req.body.vehicle,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      price: req.body.price,
    },
    { new: true },
    (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        res.status(500).send({
          message: `Error updating Rent with id ${req.params.id}.`,
        });
      }
    }
  );
};
