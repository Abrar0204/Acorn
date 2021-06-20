import axios from "axios";
const getQuestions = () => async dispatch => {
	try {
		dispatch({ type: "questions/loading", payload: [] });

		const { data } = await axios.get("http://localhost:5000/api/questions");

		dispatch({ type: "questions/success", payload: data.questions });
	} catch (err) {
		dispatch({ type: "questions/error", payload: err });
	}
};

const updateAnswers = (chapterID, answers) => ({
	type: "questions/update",
	payload: { chapterID, answers },
});

export { getQuestions, updateAnswers };
