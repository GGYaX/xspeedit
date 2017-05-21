const robot = require("./src/robot.js");
const input = process.argv.slice(2)[0];

console.log(`Articles: ${input}`);
console.log(`Robot optimisé: ${robot.pack(input)}`);