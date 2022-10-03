const express = require("express");
const controller = require("./controller");
const response = require("./../../network/response");

const router = express.Router();

router.post("/", function (req, res) {
  const { name } = req.body;
  controller
    .addUser(name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Internal error",
        500,
        error
      );
    });
});

router.get('/', function (req, res) {
  controller
    .listUsers()
    .then((users) => {
      response.success(req, res, users, 200)
    })
    .catch((error) => {
      response.error(req, res, "Internal error", 500, error)
    });
});

module.exports = router;
