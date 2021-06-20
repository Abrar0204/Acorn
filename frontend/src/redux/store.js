import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import questionsReducer from "./reducers/questionsReducer";
import chaptersReducer from "./reducers/chaptersReducer";
import elementssReducer from "./reducers/elementsReducer";
const reducers = combineReducers({
	chapters: chaptersReducer,
	elements: elementssReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
