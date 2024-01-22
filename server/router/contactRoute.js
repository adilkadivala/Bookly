const express = require("express");
const router = express.Router();
const contact = require("../controllers/contact");


router.route("/contact").post(contact.contactform);

module.exports = router;
