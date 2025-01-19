import fs from "node:fs/promises";

const fileHandle = await fs.open("./text.txt", "r");

const lines = fileHandle.readLines({ encoding: "utf-8" });
console.log(lines);
await fileHandle.close()