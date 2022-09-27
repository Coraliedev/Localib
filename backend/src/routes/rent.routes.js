const rentRouter = require("express").Router();
const rentController = require("../controllers/rent.controller");

rentRouter.post("/", rentController.createRent);
rentRouter.get("/:id", rentController.getRentById);

module.exports = rentRouter;
