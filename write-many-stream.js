import fs from "node:fs/promises";



//DON'T  DO IN THIS WAY!

console.time("time");
const fileHandle = await fs.open("./text.txt", "w");

const stream = fileHandle.createWriteStream();
for (let i = 0; i < 1000000; i++) {
    const buff = Buffer.from(`${i} `, "utf-8")
    stream.write(buff);
}

console.timeEnd("time")