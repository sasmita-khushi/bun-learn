import fs from "node:fs";

let i = 0;
setInterval(() => {
  i++;
  console.log(`1-${i}`);
}, 50);

let p = fs.readFileSync("./snail.mp4"); //blocking code
console.log("reading done");
console.log(p);
console.log("hii");
