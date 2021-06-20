import axios from "axios";

const getChapters = () => async (dispatch) => {
	try {
		dispatch({ type: "chapters/loading", payload: [] });

		const { data } = await axios.get("http://localhost:5000/api/questions");

		dispatch({ type: "chapters/success", payload: data });
	} catch (err) {
		dispatch({ type: "chapters/error", payload: err });
	}
};

export { getChapters };
