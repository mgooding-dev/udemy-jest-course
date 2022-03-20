const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.router();

router.post("/", todoController.createTodo);

module.exports = router;