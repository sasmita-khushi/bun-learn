
import fs from "node:fs/promises";

const fileHandle = await fs.open("./fix-isssue.js", "r");
const fileHandle2 = await fs.open("./copy-fix-issue.js", "w");

const rs = fileHandle.createReadStream();
const ws = fileHandle2.createWriteStream();

//WHEN STREAM IS IN FLOWING MODE,IT AUTOMATICALLY PUSHES EACH CHUNK OF DATA IN TO THE PIPELINE .
rs.on("data", (chunk) => {
    const result = ws.write(chunk);

    if (!result) {
        console.log("back pressure");
        rs.pause();
    }
});

rs.on("end", () => {
    ws.end();
});

rs.on("error", () => {
    console.log("an error has occured");

})

ws.on("drain", () => {
    console.log("drained");
    rs.resume();
});

// THIS STREAM IS IN NON-FLOWING MODE - MEANS WE HAVE TO ASK FOR THE DATA.

// process.stdin.on("data", (chunk) => {


//     var text = chunk.toString().trim();
//     console.log("echo : ", text);
// })
