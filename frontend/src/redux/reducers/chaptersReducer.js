const initialState = {
	chapters: [],
	loading: true,
	error: null,
};

const chaptersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "chapters/success":
			return { ...state, loading: false, chapters: payload };
		case "chapters/loading":
			return { ...state, loading: true, chapters: [] };
		case "chapters/error":
			return { ...state, loading: false, error: payload };
		case "questions/update":
			console.log(payload);
			return {
				...state,
				chapters: state.chapters.map(ch =>
					ch.id === payload.chapterID
						? {
								...ch,
								questions: ch.questions.map((qu, qIndex) => ({
									...qu,
									completed: true,
									correct:
										qu.answer === payload.answers[qIndex],
									chosenAnswer: payload.answers[qIndex],
								})),
						  }
						: ch
				),
			};
		default:
			return state;
	}
};
export default chaptersReducer;
