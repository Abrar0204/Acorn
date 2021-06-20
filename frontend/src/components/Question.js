import React, { useEffect, useState } from "react";
import Options from "./Options";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateAnswers } from "../redux/actions/questionsAction";

function Question({ match }) {
	const questionID = parseInt(match.params.qid);
	const chapterID = match.params.cid;

	const { loading, chapters } = useSelector(state => state.chapters);
	const chapterData = chapters.find(elem => elem.id === chapterID);
	const questionData = chapterData?.questions[questionID - 1];
	const [options, setOptions] = useState(
		questionData?.options.map(option => ({
			option,
			state: "unselected",
		}))
	);
	const [answers, setAnswers] = useState([]);
	const [answerSelected, setAnswerSelected] = useState(false);

	useEffect(() => {
		setAnswerSelected(false);
		setOptions(
			questionData?.options.map(option => ({
				option,
				state: "unselected",
			}))
		);
	}, [questionData]);

	const history = useHistory();
	const dispatch = useDispatch();

	const answerHandler = (answerIdx, answer) => {
		setAnswerSelected(true);
		setAnswers(prev => prev.concat(answer));
		const updateOptions = state =>
			setOptions(prev =>
				prev.map((option, index) =>
					index === answerIdx ? { ...option, state } : option
				)
			);
		const forwardToNextQuestion = () => {
			if (questionID === chapterData.questions.length) {
				dispatch(updateAnswers(chapterID, answers));
				history.push(`/chapters/${chapterID}/report`);
				return;
			}
			history.push(`/chapters/${chapterID}/questions/${questionID + 1}`);
		};
		const showCorrectOrWrongAnswer = () => {
			if (answer === questionData.answer) {
				updateOptions("correct");
			} else {
				updateOptions("incorrect");
			}
			setTimeout(forwardToNextQuestion, 1000);
		};

		updateOptions("selected");
		setTimeout(showCorrectOrWrongAnswer, 1000);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				height: "100%",
				padding: "0rem 7rem",
			}}
		>
			{loading ? (
				<h1 className="chapter-title">Loading</h1>
			) : (
				<div
					style={{
						display: "flex",

						flexDirection: "column",
						justifyContent: "flex-start",
						marginTop: "20px",
						flexGrow: 6,
						marginLeft: "80px",
						flexBasis: "0",
					}}
				>
					<h1 style={{ fontSize: "40px", marginLeft: "-30px" }}>
						Act {questionID}
					</h1>
					<div className="questionSpan">
						<span>{questionData.description}</span>
					</div>
					<div className="questionSpan">
						<span>{questionData.question}</span>
					</div>
					<div style={{ alignSelf: "center", marginTop: "20px" }}>
						{options?.map((option, index) => (
							<Options
								key={questionData.question + option.option}
								option={index + 1}
								optionName={option.option}
								optionState={option.state}
								answerHandler={answerHandler}
								answerSelected={answerSelected}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default Question;
