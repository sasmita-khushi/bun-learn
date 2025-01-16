import fs from "node:fs";

let i = 0;
setInterval(() => {
    console.log(`${i}`);
    i++;

}, 100)

fs.readFile("./text.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})


// let p = fs.readFileSync("./text.txt");
// console.log("reading done");
// console.log(p);
// console.log("hii");

