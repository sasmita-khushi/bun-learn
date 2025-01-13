import fs from "node:fs/promises";


const fileHandler = await fs.open("./foo.txt");

const bf = new Uint8Array(1);

let content = await fileHandler.read({ buffer: bf, offset: 0, length: 1, position: 0 });

const td = new TextDecoder("utf-8");
const text = td.decode(content.buffer);
console.log(text);