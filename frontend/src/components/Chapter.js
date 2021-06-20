import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Chapter = ({ match }) => {
	const chapterID = match.params.cid;

	const chapterData = useSelector(state =>
		state.chapters.chapters.find(elem => elem.id === chapterID)
	);
	const loading = useSelector(state => state.chapters.loading);
	const getColor = option => {
		switch (option) {
			case true:
				return "question-indicator correct";
			case false:
				return "question-indicator incorrect";
			default:
				return "question-indicator";
		}
	};
	return (
		<div>
			{loading ? (
				<h1 className="chapter-title">Loading...</h1>
			) : (
				<div className="chapter">
					<h1 className="chapter-title">{chapterData.title}</h1>
					<p className="chapter-description">
						{chapterData.description}
					</p>
					<div>
						<h2 className="chapter-title md">Questions</h2>
						<div className="question-indicator-container">
							{chapterData.questions.map((question, index) => (
								<div
									key={
										"circle" +
										question.question +
										question.answer
									}
									className={getColor(question.correct)}
								>
									{index + 1}
								</div>
							))}
						</div>
					</div>
					<Link
						to={`/chapters/${chapterID}/questions/1`}
						className="button start"
					>
						Start
					</Link>
				</div>
			)}
		</div>
	);
};

export default Chapter;
