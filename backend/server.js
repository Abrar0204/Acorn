const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

//Routes
const questionRoutes = require("./routes/questionsRoutes");
const elementsRoutes = require("./routes/elementRoutes");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome To Acorn"));

app.use("/api/questions", questionRoutes);
app.use("/api/elements", elementsRoutes);

app.listen(process.env.PORT || 5000, () => console.log("Server started"));
