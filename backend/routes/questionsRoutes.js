const { Router } = require("express");

const db = require("../services/firebase");

const router = Router();

router.get("/", async (req, res) => {
	const questionsRef = db.collection("questions");

	try {
		const questions = await questionsRef.get();

		const questionsData = [];

		questions.forEach((question) => questionsData.push(question.data()));

		res.send({
			questions: questionsData,
		});
	} catch (err) {
		console.log(err);
		res.status(400).send(err.message);
	}
});

module.exports = router;
