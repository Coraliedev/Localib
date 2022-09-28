const ClientModel = require("../models/client.model");

// Create and Save a new Client
module.exports.createClient = (req, res) => {
  // Create a Client
  const client = new ClientModel({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    // email: req.body.email,
    phone: req.body.phone,
    birthdate: req.body.birthdate,
  });

  // Save Client in the database
  ClientModel.create(client, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  });
};

// Retrieve a single Client with clientId
module.exports.getClientById = (req, res) => {
  ClientModel.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Not found Client with id ${req.params.id}.`,
      });
    }
  });
};

// Retrieve all Clients from the database.
module.exports.getAllClients = (req, res) => {
  ClientModel.find({}, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  });
};

// Delete a Client with the specified clientId in the request
module.exports.deleteClientById = (req, res) => {
  ClientModel.findByIdAndRemove(req.params.id, (err) => {
    if (!err) {
      res.send({
        message: `Client ${req.params.id} was deleted successfully!`,
      });
    } else {
      res.status(500).send({
        message:
          `Could not delete Client with id ${req.params.id} ` + req.params.id,
      });
    }
  });
};

// Update a Client identified by the clientId in the request
module.exports.updateClientById = (req, res) => {
  ClientModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        res.status(500).send({
          message: `Error updating Client with id ${req.params.id}.`,
        });
      }
    }
  );
};
