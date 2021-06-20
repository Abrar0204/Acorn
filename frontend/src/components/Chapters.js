import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Chapters = () => {
	const [selectedChapter, setSlectedChapter] = useState("ancient");

	const chaptersData = useSelector((state) => state.chapters);
	const { chapters, loading } = chaptersData;

	const ancientRef = useRef();
	const medeivalRef = useRef();
	const independentRef = useRef();
	const modernRef = useRef();

	const refs = {
		ancient: ancientRef,
		medieval: medeivalRef,
		independent: independentRef,
		modern: modernRef,
	};

	const switchSelected = (e) => {
		const { chapter } = e.target.dataset;

		refs[chapter].current.scrollIntoView();

		setSlectedChapter(chapter);
	};

	return (
		<div className="chapters container">
			<h1 className="chapters-title">
				{loading ? "Loading" : "Chapters"}
			</h1>

			<div className="chapters-selector">
				{chapters.map(({ id }, index) => (
					<div
						key={id}
						data-chapter={id}
						className={
							selectedChapter === id
								? "selector selected"
								: "selector "
						}
						onClick={switchSelected}
					>
						{index + 1}
					</div>
				))}
			</div>
			<div className="chapters-list">
				{chapters.map(
					({ id, title, description, ref, total, completed }) => (
						<div
							data-chapter={id}
							key={id}
							ref={refs[id]}
							className={`chapters-list-item ${id} selected`}
						>
							<h1 className="title">{title}</h1>
							<p className="description">{description}</p>
							<div className="completed">
								<p>{`0${completed}/0${total}`}</p>
							</div>
							<Link
								to={`/chapters/${id}`}
								className="button play"
							>
								<svg
									width="25"
									height="32"
									viewBox="0 0 25 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 0V32L25 16L0 0Z"
										fill="#F5F5F5"
									/>
								</svg>
							</Link>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Chapters;

// const chapters = [
// 	{
// 		id: "1",
// 		imageClass: "ancient",
// 		title: "Ancient India",
// 		total: 5,
// 		completed: 0,
// 		description: `India's history and culture is dynamic, spanning back to
// 						the beginning of human civilization. Find out the roles
// 						played by the periodic elements in these ancient times`,
// 		ref: ancientRef,
// 	},
// 	{
// 		id: "2",
// 		imageClass: "medieval",
// 		title: "Medieval India",
// 		total: 5,
// 		completed: 0,
// 		description: `India's history and culture is dynamic, spanning back to
// 						the beginning of human civilization. Find out the roles
// 						played by the periodic elements in these ancient times`,
// 		ref: medeivalRef,
// 	},
// 	{
// 		id: "3",
// 		imageClass: "independent",
// 		title: "Independent India",
// 		total: 5,
// 		completed: 0,
// 		description: `India's history and culture is dynamic, spanning back to
// 						the beginning of human civilization. Find out the roles
// 						played by the periodic elements in these ancient times`,
// 		ref: independentRef,
// 	},
// 	{
// 		id: "4",
// 		imageClass: "modern",
// 		title: "Modern India",
// 		total: 5,
// 		completed: 0,
// 		description: `India's history and culture is dynamic, spanning back to
// 						the beginning of human civilization. Find out the roles
// 						played by the periodic elements in these ancient times`,
// 		ref: modernRef,
// 	},
// ];
