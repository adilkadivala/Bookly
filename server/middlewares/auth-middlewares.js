const jwt = require("jsonwebtoken");
const user = require("../models/userModels");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized, token not provided" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await user.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    if (!userData) {
      return res.status(401).json({ message: "Unauthorized, user not found" });
    }

    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    console.log(userData);
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Unauthorized, invalid token" });
  }
};

module.exports = authMiddleware;
