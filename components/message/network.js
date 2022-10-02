const express = require("express");
const controller = require("./controller");
const response = require("./../../network/response");

const router = express.Router();

router.get("/", function (req, res) {
  const header = req.headers;
  console.log(header);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "Lista de mensajes");
});

router.post("/", function (req, res) {
  const { user, message } = req.body;
  controller
    .addMessage(user, message)
    .then((message) => {
      response.success(req, res, message, 201);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Informacion invalida",
        400,
        "Error en el controller"
      );
    });
});

module.exports = router;
