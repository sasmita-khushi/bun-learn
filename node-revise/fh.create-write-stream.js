import fs from "node:fs/promises";

const fileHandle = await fs.open("./text.txt", "w");

let ws = fileHandle.createWriteStream();

ws.write("hii khushi");
ws.end();