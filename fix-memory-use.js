import fs from "node:fs/promises";

console.time("hello");
const fileHandle = await fs.open("./text.txt", "w");

const wr = fileHandle.createWriteStream();

//console.log(wr.writableHighWaterMark);
//console.log(wr.writableLength);

let i = 0;
function writeMany() {
    while (i < 100000) {
        if (i === 9999) {
            return wr.end(`${i} `)
        }
        if (!wr.write(`${i} `)) {
            break;
        } else {
            i++;
        }

    }
}

writeMany();
wr.on("drain", () => {
    //console.log("drained---")
    writeMany();
})

wr.on("finish", () => {
    console.timeEnd("hello")
    fileHandle.close();
})




// let isSuccess = wr.write("hell")
// console.log(isSuccess);
// isSuccess = wr.write("o");
// console.log(isSuccess)
// console.log(wr.writableLength)
//console.timeEnd("hello");
