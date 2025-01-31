import fs from "node:fs/promises";

console.time("hello");
const fileHandle = await fs.open("./text.txt", "w");

const wr = fileHandle.createWriteStream();

let i = 0;
function writeMany() {
    while (i < 1000000) {
        let sucess = wr.write(`${i} `)
        if (sucess) {
            i++;
        } else {
            return;
        }

    }
    wr.close();
}

writeMany();
wr.on("drain", () => {
    console.log(`${i} drained`)
    i++;
    writeMany();
})

wr.on("finish", () => {
    console.timeEnd("hello")
    fileHandle.close();
})
