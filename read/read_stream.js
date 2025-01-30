
import fs from "node:fs/promises";

const fileHandle = await fs.open("./copy-file.js", "r");

const rs = fileHandle.createReadStream();

//WHEN STREAM IS IN FLOWING MODE,IT AUTOMATICALLY PUSHES EACH CHUNK OF DATA IN TO THE PIPELINE .
rs.on("data", (chunk) => {
    console.log("size : ", chunk);
});

rs.on("end", () => {
    console.log("finished");
});

rs.on("err", () => {
    console.log("an error has occured");

})

// THIS STREAM IS IN NON-FLOWING MODE - MEANS WE HAVE TO ASK FOR THE DATA.

process.stdin.on("data", (chunk) => {


    var text = chunk.toString().trim();
    console.log("echo : ", text);
})
