import React, { useState, useRef, useEffect } from "react";

const Timer = ({ timeLimit, forwardToNextQuestion }) => {
	const [seconds, setSeconds] = useState(timeLimit);

	const countDown = () => {
		if (seconds === 0) {
			setSeconds(timeLimit);
			forwardToNextQuestion();
		}
		setSeconds(seconds - 1);
	};
	useEffect(() => {
		const timerId = setInterval(countDown, 1000);
		return () => clearInterval(timerId);
	});

	return <div className="timer">{seconds}</div>;
};

export default Timer;
