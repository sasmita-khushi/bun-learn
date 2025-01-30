import fs from "node:fs";

let i = 0;
setInterval(() => {
  i++;
  console.log(`i-${i}`);
}, 1000);

let rs = fs.createReadStream("./snail.mp4", { highWaterMark: 20000000 });

let k = 0;
rs.on("data", (chunk) => {
  k++;
  console.log(k, chunk.length);
});

rs.on("end", () => {
  console.log("reading done");
});
