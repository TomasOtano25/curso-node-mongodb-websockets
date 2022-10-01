const express = require("express");

const response = require("./../../network/response");

const router = express.Router();

router.post("/", function (req, res) {
  const body = req.body;
  const query = req.query;
  if (req.query.error === "ok") {
    response.error(
      req,
      res,
      "Error al intentar crear",
      400,
      "Es solo una simulacion de un error"
    );
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

router.get("/", function (req, res) {
  const header = req.headers;
  console.log(header);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "Lista de mensajes");
});

module.exports = router;
