const express = require("express");
const multer = require('multer');

const config = require('../../config')
const controller = require("./controller");
const response = require("./../../network/response");
const router = express.Router();

const upload = multer({
  dest: `public/${config.filesRoute}/`,
})

router.get("/", function (req, res) {
  const filterMessages = {
    user: req.query.user || null,
    chat: req.query.chat || null
  };
  controller
    .getMessages(filterMessages)
    .then((messagesList) => {
      response.success(req, res, messagesList);
    })
    .catch((error) => {
      response.error(req, res, "Unexpected Error", 500, error);
    });
});

router.post("/", upload.single('file'), function (req, res) {
  const { chat, user, message } = req.body;
  controller
    .addMessage(chat, user, message, req.file)
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

router.patch("/:id", function (req, res) {
  const { id } = req.params;
  const { message } = req.body;
  controller
    .updateMessage(id, message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Error interno",
        500,
        error
      );
    });
});

router.delete("/:id", function (req, res) {
  const { id } = req.params;
  controller
    .deleteMessage(id)
    .then(() => {
      response.success(req, res, undefined, 200);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Error interno",
        500,
        error
      );
    });
});

module.exports = router;
