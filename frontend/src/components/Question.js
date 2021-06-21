import React, { useEffect, useRef, useState } from "react";
import Options from "./Options";
import TimerComponent from "./TimerComponent";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateAnswers } from "../redux/actions/questionsAction";
import { default as rectbg } from "../res/svg/rect_tilt.svg";
import FireYes from "../res/svg/fire_yes.svg";
import FireNo from "../res/svg/fire_no.svg";
import FireEff from "../res/audio/fireburn.wav";

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
	const [testOver, settestOver] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		setAnswerSelected(false);
		setOptions(
			questionData?.options.map(option => ({
				option,
				state: "unselected",
			}))
		);
	}, [questionData]);

	const forwardToNextQuestion = () => {
		if (questionID === chapterData.questions.length) {
			settestOver(true);
			var firesound = new Audio(FireEff);
			firesound.play();
			setTimeout(function () {
				dispatch(updateAnswers(chapterID, answers));
				history.push(`/chapters/${chapterID}/report`);
			}, 2000);
			// return;
		} else {
			history.push(`/chapters/${chapterID}/questions/${questionID + 1}`);
		}
	};

	const answerHandler = (answerIdx, answer) => {
		setAnswerSelected(true);
		setAnswers(prev => prev.concat(answer));
		const updateOptions = state =>
			setOptions(prev =>
				prev.map((option, index) =>
					index === answerIdx ? { ...option, state } : option
				)
			);

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
		<div>
			{loading ? (
				<h1 className="chapter-title">Loading</h1>
			) : (
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						width: "100%",
						height: "100%",
						padding: "0rem 7rem",
					}}
				>
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
						className="question-page"
					>
						<h1 style={{ fontSize: "40px", marginLeft: "-30px" }}>
							Act {questionID} / {chapterData.questions.length}
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
						<div className="timer-progress">
							{/* <TimerComponent
								forwardToNextQuestion={forwardToNextQuestion}
							/> */}
							<div className="progress-bar-container">
								<div
									className="progress-bar"
									style={{
										width: `${
											(questionID /
												chapterData.questions.length) *
											100
										}%`,
									}}
								/>
							</div>
						</div>
					</div>
					<div
						style={{
							flexGrow: 1,
							position: "relative",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginLeft: "20px",
						}}
					>
						<h1 className="header-progress">
							Help Zoomba light the fire!
						</h1>
						<div height="100%">
							<img
								src={rectbg}
								className="imgceter"
								alt="opion"
							/>
							<img
								src={testOver ? FireYes : FireNo}
								className="imgceter1"
								alt="opion"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Question;
