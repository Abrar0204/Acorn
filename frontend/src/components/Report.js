import React from "react";
import { useSelector } from "react-redux";

import correctIcon from "../res/images/correct.png";
import incorrectIcon from "../res/images/incorrect.png";
import { PieChart } from "react-minimal-pie-chart";
const Report = ({ match }) => {
	const chapterID = match.params.cid;

	const { loading, chapters } = useSelector(state => state.chapters);

	const chapterData = chapters.find(ch => ch.id === chapterID);

	const noOfCorrectQuestion = () => {
		let correctAnswers = chapterData.questions.reduce(
			(acc, question) =>
				question.correct === true ? parseInt(acc) + 1 : parseInt(acc),
			0
		);

		return correctAnswers;
	};
	return loading ? (
		<div>
			<h1 className="chapter-title">Loading ...</h1>
		</div>
	) : (
		<div className="report">
			<h1 className="chapter-title">Report For {chapterData.title}</h1>
			<div>
				<h2>Short Report</h2>
				<div className="piechart-container">
					<PieChart
						data={[
							{
								title: "Correct",
								value: noOfCorrectQuestion(),
								color: "#276749",
							},
							{
								title: "Incorrect",
								value:
									chapterData.questions.length -
									noOfCorrectQuestion(),
								color: "#c53030",
							},
						]}
						label={({ dataEntry }) =>
							(
								dataEntry.value / chapterData.questions.length
							).toPrecision(1) *
								100 +
							"%"
						}
						labelStyle={{
							color: "white",
							fontSize: "10px",
						}}
					/>
					<div className="label-container">
						<div>
							<div className="color-box" />
							<p>Correct</p>
						</div>
						<div>
							<div className="color-box incorrect" />
							<p>Incorrect</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2>Long Report</h2>
				<div className="questions-list">
					{chapterData.questions.map((question, qIndex) => (
						<div
							key={question.question}
							className="questions-list-item"
						>
							<div className="correctness">
								{question.correct &&
								question.correct !== "null" ? (
									<img
										src={correctIcon}
										alt="Correct"
										width="45"
									/>
								) : (
									<img
										src={incorrectIcon}
										alt="Incorrect"
										width="45"
									/>
								)}
							</div>
							<div>
								<h3>
									{qIndex + 1}) {question.description}
								</h3>
								<h3>{question.question}</h3>
								<div className="options">
									{question.options.map((option, oIndex) => (
										<div
											key={
												question.question +
												option +
												oIndex
											}
											className="option"
										>
											<input type="radio" disabled />
											<p>{option}</p>
											{question.answer === option ? (
												<img
													src={correctIcon}
													alt="Correct"
													width="20"
												/>
											) : question.chosenAnswer ===
											  option ? (
												<img
													src={incorrectIcon}
													alt="Incorrect"
													width="20"
												/>
											) : (
												""
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Report;
