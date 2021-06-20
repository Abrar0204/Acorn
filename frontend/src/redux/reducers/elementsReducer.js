const initialState = {
	elements: [],
	loading: true,
	error: null,
};

const elementssReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "elements/success":
			return { ...state, loading: false, elements: payload };
		case "elements/loading":
			return { ...state, loading: true, elements: [] };
		case "elements/error":
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
};
export default elementssReducer;
