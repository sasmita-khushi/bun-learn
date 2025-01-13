//WITH PROMISE API

import fs from "node:fs/promises"

let fileHandler = await fs.open("./data.txt", "w");

console.time("start")
for (let i = 0; i <= 1000000; i++) {
    await fileHandler.write(`${i} `)
}
console.timeEnd("start");
fileHandler.close();
console.log("done")