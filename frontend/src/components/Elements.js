import React from "react";
import { useSelector } from "react-redux";

const Elements = () => {
	const elementsData = useSelector(state => state.elements);

	const { elements } = elementsData;

	return (
		<div className="elements">
			<div className="elements-container">
				{elements.map(({ name, shortName, type }) => (
					<div
						key={shortName}
						className={`${name} element ${type}`}
						style={{ gridArea: shortName }}
					>
						<h1>{shortName}</h1>
						<p>{name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Elements;
