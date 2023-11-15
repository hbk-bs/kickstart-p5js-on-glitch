/// <reference path="./lib/p5.sound.d.ts" />
/// <reference path="./lib/global.d.ts" />
/// <reference path="./lib/literals.d.ts" />
/// <reference path="./lib/index.d.ts" />
/// <reference path="./lib/constants.d.ts" />
//@ts-check
// Keep these comments alive.
// They will help you while writing code.

function setup() {
	// setup runs once
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(128);
}

function draw() {
	// draw runs all the time
	circle(50, 50, 50);
}
