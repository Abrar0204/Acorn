class Chapter {
	id = "";
	title = "";
	description = "";
	total = 0;
	completed = 0;
	questions = [];

	constructor({
		id = "",
		title = "",
		description = "",
		total = 0,
		completed = 0,
		questions = [],
	}) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.total = total;
		this.completed = completed;
		this.questions = questions;
	}
}

module.exports = Chapter;
