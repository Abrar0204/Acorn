import axios from "axios";

const getElements = () => async (dispatch) => {
	try {
		dispatch({ type: "elements/loading", payload: [] });

		const { data } = await axios.get("http://localhost:5000/api/elements");

		dispatch({ type: "elements/success", payload: data });
	} catch (err) {
		dispatch({ type: "elements/error", payload: err });
	}
};

export { getElements };
