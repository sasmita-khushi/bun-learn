import fs from "node:fs/promises";

const fileHandle = await fs.open("./y.txt", "r");
const fileHandle2 = await fs.open("./w.txt", "w");

const rs = fileHandle.createReadStream();
const ws = fileHandle2.createWriteStream({ highWaterMark: 1200 });

rs.on("data", (chunk) => {
    console.log("data chunk received");
    const result = ws.write(chunk);
    if (!result) {
        console.log("back pressure");//Back Pressure - when hose is full
        rs.pause();
        console.log("paused");
    }
});

rs.on("error", (err) => {
    console.log("an error has occurred:", err);
});

rs.on("end", () => {
    console.log("read stream ended");
    ws.end();
});

ws.on("drain", () => {
    console.log("drain event");
    rs.resume();
    console.log("resumed");
});

