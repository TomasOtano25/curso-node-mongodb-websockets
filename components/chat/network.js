const express = require("express");
const controller = require("./controller");
const response = require("./../../network/response");

const router = express.Router();

router.post("/", function (req, res) {
  const { users } = req.body;
  controller
    .addChat(users)
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

router.get('/:userId', function (req, res) {
  const { userId } = req.params;
  controller
    .listChats(userId)
    .then((users) => {
      response.success(req, res, users, 200)
    })
    .catch((error) => {
      response.error(req, res, "Internal error", 500, error)
    });
});

module.exports = router;
