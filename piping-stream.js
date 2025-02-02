import fs from "node:fs/promises";

const rs = fs.open("./y.txt", "r");
const ws = fs.open("./w.txt", "w");

//rs.pipe(ws);
process.stdin.pipe(ws);