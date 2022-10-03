require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 3000;

const server = require('http').Server(app);

const bodyParser = require("body-parser");
const socket = require('./socket');
const db = require('./db');
const router = require("./network/routes");
const connect = require('./db');

db(process.env.MONGO_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use("/app", express.static("public"));

server.listen(PORT, () => {
  console.log(`La aplicacion esta escuchando en http://localhost:${PORT}`);
});
