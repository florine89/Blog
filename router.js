const express = require("express");

const controller = require("./controller");
const router = express.Router();

router.get("/", controller.init);

router.get("/article/:id", controller.getArticleById);

router.get("/category/:categoryName", controller.getArticlesByCategory);

module.exports = router;
