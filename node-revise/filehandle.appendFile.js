import fs from "node:fs/promises";

const fileHandle = await fs.open("./text.txt", "a");

await fileHandle.appendFile("hii khushi", "utf-8")

console.log("file append sucesfully");


await fileHandle.close();