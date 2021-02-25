const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();

//Routes
const questionRoutes = require("./routes/questionsRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/questions", questionRoutes);

app.listen(process.env.PORT || 5000, () => console.log("Server started"));
