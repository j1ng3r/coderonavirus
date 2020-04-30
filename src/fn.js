let fn = module.exports = class fn {
	constructor(fn) {
		this.fn = fn;
	}
	eval(args) {
		return this.fn(args);
	}
};