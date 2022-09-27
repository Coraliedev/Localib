const rentRouter = require('express').Router();
const rentController = require('../controllers/rent.controller');

rentRouter.post('/', rentController.createRent);


module.exports = rentRouter;