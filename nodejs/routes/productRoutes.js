var express = require('express');
var authVerify = require("../middlewares/auth");
const { getProducts, createProduct } = require('../controllers/proudctController');
var productRouter = express.Router();


productRouter.get("/",authVerify, getProducts)
productRouter.post("/create",authVerify, createProduct)

module.exports = productRouter;