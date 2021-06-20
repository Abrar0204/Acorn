import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getQuestions } from "./redux/actions/questionsAction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Chapters from "./components/Chapters";
import Chapter from "./components/Chapter";
import Question from "./components/Question";
import { getChapters } from "./redux/actions/chaptersAction";
import { getElements } from "./redux/actions/elementsAction";
import Elements from "./components/Elements";
import Report from "./components/Report";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getChapters());
		dispatch(getElements());
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/chapters" exact component={Chapters} />
					<Route path="/chapters/:cid" exact component={Chapter} />
					<Route
						path="/chapters/:cid/questions/:qid"
						exact
						component={Question}
					/>
					<Route path="/chapters/:cid/report" component={Report} />
					<Route path="/elements" exact component={Elements} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
