const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();

//Routes
const questionRoutes = require("./routes/questionsRoutes");
const elementsRoutes = require("./routes/elementRoutes");
const corsOption = {
	origin: "https://acorn-game.netlify.app",
	originSuccessStatus: 200,
};

const env = process.env.NODE_ENV || "development";

const app = express();

app.use(cors());

// if (env === "development") {
// 	app.use(cors());
// }
// else {
// 	app.use(cors(corsOption));
// }

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Welcome To Acorn"));

app.use("/api/questions", questionRoutes);
app.use("/api/elements", elementsRoutes);

app.listen(process.env.PORT || 5000, () => console.log("Server started"));
