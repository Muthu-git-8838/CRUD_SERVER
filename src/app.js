const express = require("express");
const app = express();
const router = require("./routes/router");
require("./db/conn");
const CORS = require("cors");
const PORT = process.env.PORT || 5005;
require("dotenv").config();

app.use(CORS());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on Port Number : ${PORT}`);
});
