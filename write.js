import fs from "node:fs/promises";

const fileHandle = await fs.open("./y.txt", "w");

let ws = fileHandle.createWriteStream();

for (let i = 0; i < 100000; i++) {
    ws.write(`${i} `);
}