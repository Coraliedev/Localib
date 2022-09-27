const ClientModel = require("../models/client.model");

// Create and Save a new Client
module.exports.createClient = (req, res) => {
  // Create a Client
  const client = new ClientModel({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
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
