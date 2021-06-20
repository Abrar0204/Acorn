import React from "react";
import MainGreeting from "../res/svg/landing-greet.svg";
import Elephant from "../res/svg/elephant.svg";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className="home-main">
			<div className="navbar">
				<div className="active-link">
					<span className="navbarItem-active">Home</span>
					<span
						className="navbarItem-active"
						style={{ fontWeight: "bolder", fontSize: "35px" }}
					>
						.
					</span>
				</div>
				<span className="navbarItem">Get Started</span>
				<span className="navbarItem">Periodic Table</span>
				<span className="navbarItem">Help</span>
			</div>
			<div className="content">
				<div className="main-greeting">
					<img
						className="greeting-svg"
						src={MainGreeting}
						alt="Kurukka intha kowshik vantha?"
					/>
					<Link to="/chapters" className="play-button">
						Play Now
					</Link>
				</div>
				<img
					className="elephant-svg"
					src={Elephant}
					alt="Kurukka intha kowshik vantha?"
				/>
			</div>
		</div>
	);
};

export default Home;
