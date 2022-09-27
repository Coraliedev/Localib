const carRouter = require("express").Router();
const vehicleController = require("../controllers/vehicle.controller");

carRouter.post("/", vehicleController.createVehicle);
carRouter.get("/:id", vehicleController.getVehicleById);
carRouter.get("/", vehicleController.getAllVehicles);
carRouter.delete("/:id", vehicleController.deleteVehicleById);

module.exports = carRouter;
