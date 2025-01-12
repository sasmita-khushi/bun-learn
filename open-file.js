import fs from "node:fs/promises";
import { buffer } from "node:stream/consumers";


let fileHandler = await fs.open("./text.txt", "r")
//let stats = await fileHandler.stat();
//let data = await fileHandler.readFile({ encoding: "utf-8" });
// fileHandler.close();
//console.log(data);
//console.log(stats);
let position = 3;

const timer = setInterval(async () => {
    let bff = Buffer.alloc(3);

    let data = await fileHandler.read(bff, 1, 1, position);

    if (data.bytesRead === 0) {
        console.log("end");
        clearInterval(timer);
        await fileHandler.close()
    }
    console.log(data);
    position++;
}, 500)

//await fileHandler.close();