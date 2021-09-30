const path = require("path");
const product = require("../controllers/product");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", product.getProducts);

module.exports = router;
