const express = require("express");
const bodyParser=require('body-parser')
const clientRoutes = require('./src/routes/client.routes')

require("dotenv").config({ path: "./src/config/.env" });
require('./src/config/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//routes
app.use('/client',clientRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});