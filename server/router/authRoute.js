const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const signupschema = require("../validation/auth-validation");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middlewares");

router.route("/user").get(authMiddleware, auth.User);
router.route("/signup").post(validate(signupschema), auth.signup);
router.route("/login").post(auth.login);

module.exports = router;
