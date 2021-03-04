const { Router } = require("express");
const elements = require("../data/elements");
const Element = require("../models/elementModel");
const router = Router();

router.get("/", async (req, res) => {
	try {
		const elementsData = [];
		elements.forEach((elem, index) => {
			const { name, shortName, num, type } = elem;

			elementsData.push(
				new Element({
					name,
					shortName,
					num,
					type,
				})
			);
		});

		res.send(elementsData);
	} catch (err) {
		console.log(err);
		res.status(400).send("LOL");
	}
});

module.exports = router;
