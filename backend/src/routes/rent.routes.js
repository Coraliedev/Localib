const rentRouter = require("express").Router();
const rentController = require("../controllers/rent.controller");

rentRouter.post("/", rentController.createRent);
rentRouter.get("/:id", rentController.getRentById);
rentRouter.get("/", rentController.getAllRents);
rentRouter.delete("/:id", rentController.deleteRentById);
rentRouter.put("/:id", rentController.updateRentById);

module.exports = rentRouter;
