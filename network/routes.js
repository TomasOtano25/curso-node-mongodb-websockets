const express = require("express");

const meesageRouter = require("./../components/message/network");

const routes = function (serve) {
  serve.use("/message", meesageRouter);
};

module.exports = routes;
