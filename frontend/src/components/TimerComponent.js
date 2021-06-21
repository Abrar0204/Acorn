import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
const TimerComponent = ({ forwardToNextQuestion }) => {
	const time = new Date();
	const { seconds, restart, start } = useTimer({
		expiryTimestamp: time.setSeconds(time.getSeconds() + 10),
	});
	useEffect(() => {
		if (seconds === 0) {
			const newTime = new Date();

			forwardToNextQuestion();
			restart(newTime.setSeconds(newTime.getSeconds() + 10), true);
		}
	}, [seconds]);
	return <div className="timer">{seconds}</div>;
};

export default TimerComponent;
