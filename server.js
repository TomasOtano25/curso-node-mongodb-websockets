require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");

const db = require('./db');
const router = require("./network/routes");

db(process.env.MONGO_URL);

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(PORT, () => {
  console.log(`La aplicacion esta escuchando en http://localhost:${PORT}`);
});
