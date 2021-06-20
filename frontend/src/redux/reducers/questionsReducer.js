const initialState = {
	questions: [],
	loading: true,
	error: null,
};

const questionsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "questions/success":
			return { ...state, loading: false, questions: payload };
		case "questions/loading":
			return { ...state, loading: true, questions: [] };
		case "questions/error":
			return { ...state, loading: false, error: payload };

		default:
			return state;
	}
};
export default questionsReducer;
