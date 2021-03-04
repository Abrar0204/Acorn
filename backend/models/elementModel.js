class Element {
	name = "";
	shortName = "";
	num = 1;
	type = "";

	constructor({ name, shortName, num, type }) {
		this.name = name;
		this.shortName = shortName;
		this.num = num;
		this.type = type;
	}
}

module.exports = Element;
