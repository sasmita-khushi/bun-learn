import fs from "node:fs/promises";

const fileHandle = await fs.open("./b.txt", "r");
const fileHandle2 = await fs.open("./c.txt", "w");

const rs = fileHandle.createReadStream({ highWaterMark: 64 * 1024 });
const ws = fileHandle2.createWriteStream()

rs.on("data", (chunk) => {
    ws.write(chunk);
    console.log(chunk.length);

});



// rs.on("end", () => {
//     console.log("reading done");
// })

