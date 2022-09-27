const express = require("express");
require("dotenv").config({ path: "./src/config/.env" });
require('./src/config/db');
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});