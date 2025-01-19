
import fs from "node:fs/promises";

const fileHandle = await fs.open("./text.txt", "r");

let stat = await fileHandle.stat();
//console.log(stat);
let rs = fileHandle.createReadStream({ start: 0, end: stat.size, encoding: "utf-8" });

rs.on("data", (chunk) => {
    console.log("Chunk:", chunk);
});

rs.on("end", () => {
    console.log("Finished reading the file.")
});


rs.on("error", () => {
    console.error('Error:', error);
})

rs.on("close", () => {
    fileHandle.close();
    console.log("file closed");
})
