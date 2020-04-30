let fn = require("./fn.js");
const PointSource = module.exports = diffusionRate => class PointSource extends fn {
	constructor(event, amount) {
		this.event = event;
		this.amount = amount;
		super(event => {
			let Devent = event.subtract(this.event);
			let scaledTime = 4*diffusionRate*Devent.time();
			return this.amount * Math.exp( - Devent.loc2() / scaledTime) / (Math.PI * scaledTime) ** 1.5
		});
	}
};