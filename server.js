const express = require("express");
const app = express();
const PORT = 3000;

const router = express.Router();

router.get("/message", function (req, res) {
  res.send("Lista de mensajes");
});

router.post("/message", function (req, res) {
  res.send("Mensaje añadido");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`La aplicacion esta escuchando en http://localhost:${PORT}`);
});
