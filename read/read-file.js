import fs from "node:fs";

let i = 0;
setInterval(() => {
  i++;
  console.log(`1-${i}`);
}, 50);

fs.readFile("snail.mp4", (err, data) => {
  if (err) throw err;

  console.log("reading done");
  console.log(data);
});

console.log("hii");
