const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const errorHandler = require("./util/error");
var morgan = require("morgan");
//docker build -t api-server
//docker build -t react-app

mongoose
  .connect("mongodb://mongo:27017/addisSoftwareTest", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((data) => {
    console.log("Database connected");
  });

app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization ,  X-Auth-Token"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello tkkkkhere");
});

app.use("/api/user", require("./api/v1/user"));

app.use((req, res, err) => {
  if (err instanceof errorHandler.ErrorHandler) {
    errorHandler.handleError(err, res);
  } else {
    res.status(500).json({ message: "Internal Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("running server ");
});
