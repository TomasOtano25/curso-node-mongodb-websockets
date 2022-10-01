const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  const header = req.headers;
  console.log(header);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  res.send("Lista de mensajes");
});

router.post("/message", function (req, res) {
  const body = req.body;
  const query = req.query;
  console.log(body);
  console.log(query);
  res.send("Mensaje añadido");
});

router.delete("/message", function (req, res) {
  // res.status(201).send();
  // res.status(200).send({
  //   error: "",
  //   body: "Eliminado correctamente",
  // });
  res.status(200).send([
    {
      error: "",
      body: "Eliminado correctamente",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`La aplicacion esta escuchando en http://localhost:${PORT}`);
});
