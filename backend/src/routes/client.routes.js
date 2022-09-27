const clientRouter=require('express').Router();
const clientController=require('../controllers/client.controller');

clientRouter.post("/",clientController.createClient); 
clientRouter.get("/:id",clientController.getClientById);
clientRouter.get("/",clientController.getAllClients);


module.exports=clientRouter;