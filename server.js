const express = require("express");
const bodyParser = require("body-parser");

const router = require("./network/routes");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(PORT, () => {
  console.log(`La aplicacion esta escuchando en http://localhost:${PORT}`);
});
