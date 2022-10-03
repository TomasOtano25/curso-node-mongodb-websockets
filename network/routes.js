const express = require("express");

const meesageRouter = require("./../components/message/network");
const userRouter = require("./../components/user/network");
const chatRouter = require("./../components/chat/network");

const routes = function (serve) {
  serve.use("/message", meesageRouter);
  serve.use('/user', userRouter)
  serve.use('/chat', chatRouter)
};

module.exports = routes;
