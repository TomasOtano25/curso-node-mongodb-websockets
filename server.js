const express = require("express");
const config = require('./config')
const app = express();
const PORT = config.port;

const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require("body-parser");
const socket = require('./socket');
const db = require('./db');
const router = require("./network/routes");
const connect = require('./db');

db(config.dbUrl);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use(config.publicRoute, express.static("public"));

server.listen(PORT, () => {
  console.log(`La aplicacion esta escuchando en ${config.host}:${PORT}`);
});
