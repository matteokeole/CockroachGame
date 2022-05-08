import {Cockroach} from "./Cockroach.js";
import {log} from "./log.js";

const
	canvas = document.querySelector("#canvas"),
	ctx = canvas.getContext("2d"),
	cockroach_color = "#663d00";

// Set canvas size
canvas.width = 20;
canvas.height = 20;
ctx.fillStyle = cockroach_color;

// Place cockroaches
for (let i = 0; i < 2; i++) {
	const cockroach = new Cockroach(ctx, i)
		.spawn(
			Math.floor(canvas.width * Math.random()),
			Math.floor(canvas.height * Math.random()),
		)
		.wander();
}

log("Listening for events...", "note");