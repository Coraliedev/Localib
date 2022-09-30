const VehicleModel = require("../models/vehicle.model");

// Create and Save a new Vehicle
module.exports.createVehicle = (req, res) => {
  // Create a Vehicle
  const vehicle = new VehicleModel({
    brand: req.body.brand,
    model: req.body.model,
    matriculation: req.body.matriculation,
    state: req.body.state,
    locationPrice: req.body.locationPrice,
    type: req.body.type,
  });
  // Save Vehicle in the database
  VehicleModel.create(vehicle, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  });
};

// Retrieve Vehicle by Id
module.exports.getVehicleById = (req, res) => {
  VehicleModel.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Not found Vehicule with id ${req.params.id}.`,
      });
    }
  });
};

// Retrieve all Vehicles from the database.
module.exports.getAllVehicles = (req, res) => {
  VehicleModel.find({}, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  }).populate("unavailableDates");
};

// Delete a Vehicle with the specified vehicleId in the request
module.exports.deleteVehicleById = (req, res) => {
  VehicleModel.findByIdAndRemove(req.params.id, (err) => {
    if (!err) {
      res.send({
        message: `Vehicle ${req.params.id} was deleted successfully!`,
      });
    } else {
      res.status(500).send({
        message: `Could not delete Vehicle with id ${req.params.id} `,
      });
    }
  });
};

// Update a Vehicle identified by the vehicleId in the request
module.exports.updateVehicleById = (req, res) => {
  VehicleModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        res.status(500).send({
          message: `Could not update Vehicle with id ${req.params.id} `,
        });
      }
    }
  );
};
