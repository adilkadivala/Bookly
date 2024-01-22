require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/authRoute");
const contactRoute = require("./router/contactRoute");
const bookRoute = require("./router/bookRouter");
const connectDB = require("./database/connection");
const errorMiddleware = require("./middlewares/errore-middle");

// Sorted imports alphabetically
const corsOptions = {
  credential: "true",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  origin: "http://localhost:3000",
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(errorMiddleware);

// Routes
app.use("/", authRoute);
app.use("/", contactRoute);
app.use("/", bookRoute);

// Database port
const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`);
  });
});
