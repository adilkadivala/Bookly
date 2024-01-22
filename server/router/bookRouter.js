const express = require("express");
const bookdata = require("../controllers/books/bookdata");
const router = express.Router();

router.route("/bookdata").get(bookdata.getbookdata);

module.exports = router;
