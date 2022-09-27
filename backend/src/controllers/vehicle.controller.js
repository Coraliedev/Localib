const VehicleModel = require("../models/vehicle.model");

// Create and Save a new Vehicle
module.exports.createVehicle = (req, res) => {
  // Create a Vehicle
  const vehicle = new VehicleModel({
    brand: req.body.brand,
    model: req.body.model,
    matriculation: req.body.matriculation,
    state: req.body.state,
    available: req.body.available,
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
