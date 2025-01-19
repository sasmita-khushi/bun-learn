import fs from "node:fs/promises";

const fileHandle = await fs.open("./text.txt", "r+");

let t = await fileHandle.truncate(10);
console.log(t);
fileHandle.close();

