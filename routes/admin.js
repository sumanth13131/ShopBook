const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const product = require("../controllers/product");

// /admin/add-product => GET
router.get("/add-product", product.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", product.postAddProduct);

module.exports = router;
