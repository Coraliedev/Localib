const express = require("express");
require("dotenv").config({ path: "./src/config/.env" });
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});