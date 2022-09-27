const clientRouter=require('express').Router();
const clientController=require('../controllers/client.controller');

clientRouter.post("/",clientController.createClient); 




module.exports=clientRouter;