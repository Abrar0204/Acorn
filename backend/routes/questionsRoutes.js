const { Router } = require("express");
const Chapter = require("../models/chapterModel");
const db = require("../services/firebase");

const router = Router();

router.get("/", async (req, res) => {
	try {
		const chaptersRef = db.collection("chapters");
		const chapters = await chaptersRef.get();
		const chapterDocs = [];
		chapters.forEach((chapter) => chapterDocs.push(chapter));
		const chaptersData = [];

		let temp;

		for (let chapter of chapterDocs) {
			let { id, title, description, total, completed } = chapter.data();

			let questions = [];

			let questionsRef = chaptersRef.doc(id).collection("questions");

			let questionsDocs = await questionsRef.get();

			questionsDocs.forEach((question) => {
				questions.push(question.data());
			});

			chaptersData.push(
				new Chapter({
					id,
					title,
					description,
					total,
					completed,
					questions,
				})
			);
		}

		temp = chaptersData[1];
		chaptersData[1] = chaptersData[2];
		chaptersData[2] = temp;

		res.send(chaptersData);
	} catch (err) {
		console.log(err);
		res.status(400).send("LOL");
	}
});

module.exports = router;
