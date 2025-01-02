const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./utils/errorHandler");

require("dotenv").config();

const app = express();

//middlewares

app.use(express.json());

app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
);

app.use(cors());

app.use("/api/v1", router);

app.use("/", (req, res) => res.send("welcome to express"));

//middlewares despues de las rutas

app.use(errorHandler);

module.exports = app;
