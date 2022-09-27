const carRouter = require("express").Router();
const vehicleController = require("../controllers/vehicle.controller");

carRouter.post("/", vehicleController.createVehicle);

module.exports = carRouter;
