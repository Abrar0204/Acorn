import React from "react";
// import '../scss/components/_options.scss';
import { default as option } from "../res/svg/diam1.svg";
import { default as option2 } from "../res/svg/diam2.svg";

function Options({
	optionState,
	optionName,
	option: optionLetter,
	answerHandler,
	answerSelected,
}) {
	const getColor = () => {
		switch (optionState) {
			case "selected":
				return "#f78d1e";
			case "unselected":
				return "#1C2128";
			case "correct":
				return "#276749";
			case "incorrect":
				return "#C53030";
			default:
				return "#1C2128";
		}
	};

	const answer = () => {
		if (optionState === "unselected" && !answerSelected)
			answerHandler(optionLetter - 1, optionName);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				marginTop: "20px",
			}}
			onClick={answer}
		>
			<div
				width="70px"
				height="70px"
				style={{
					zIndex: 10,
					textAlign: "center",
					position: "relative",
				}}
			>
				<svg
					alt="opion"
					width="70px"
					height="70px"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.53554 50L50 3.53554L96.4645 50L50 96.4645L3.53554 50Z"
						fill="#F5F5F5"
						stroke="#1C2128"
						stroke-width="5"
					/>
				</svg>

				<div className="centertextContainer">
					<h2 className="centerText">{optionLetter}</h2>
				</div>
			</div>
			<div
				style={{
					backgroundColor: getColor(),
					width: "600px",
					height: "70px",
					marginLeft: "-35px",
					zIndex: "1",
					position: "relative",
				}}
			>
				<h1 className="optionAnswer">{optionName}</h1>
			</div>
			<svg
				width="70px"
				height="70px"
				style={{ zIndex: "10", marginLeft: "-35px" }}
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					y="50"
					width="70.7107"
					height="70.7107"
					transform="rotate(-45 0 50)"
					fill={getColor()}
				/>
			</svg>
		</div>
	);
}

export default Options;
