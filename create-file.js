import fs from "node:fs/promises";

const CREATE_FILE = "create a file"
const DELETE_FILE = "delete file"
const WRITE_TO_FILE = "write to file"
let watcher = await fs.watch("./text.txt");

let fileHandler = await fs.open("./text.txt", "r")





fileHandler.on("foo", async () => {
    let { size } = await fileHandler.stat();
    let buff = Buffer.alloc(size);
    let position = 0;
    let content = (await (fileHandler.read(buff, 0, size, position))).buffer.toString();


    console.log("content", content);

    if (content.includes(CREATE_FILE)) {
        const path = content.substring(CREATE_FILE.length + 1);
        console.log("PATH-- ", path);
        if (path) {
            console.log("going to create file", path);
            await fs.writeFile(path, " Hello manas " + Date.now(), "utf-8");
        }
    } else if (content.includes(DELETE_FILE)) {
        const deletePath = content.substring(DELETE_FILE.length + 1).trim();
        console.log("deletePath", deletePath)
        if (deletePath) {


            try {
                await fs.unlink(deletePath);
                console.log(deletePath, " deleted")
            } catch (err) {
                console.log(err);
                console.log("file not exits to delete");
            }

        }
    } else if (content.includes(WRITE_TO_FILE)) {
        let nextSpaceIndex = content.indexOf(" ", WRITE_TO_FILE.length + 1)
        console.log("index----", nextSpaceIndex)
        const writeToFilePath = content.substring(WRITE_TO_FILE.length + 1, nextSpaceIndex);
        const contentWritten = content.substring(nextSpaceIndex + 1)
        console.log("path------", writeToFilePath);
        console.log("content------------", contentWritten)
        if (writeToFilePath) {
            await fs.writeFile(writeToFilePath, contentWritten)
        }
    }

})


for await (const event of watcher) {
    if (event.eventType === "change") {
        fileHandler.emit("foo")
    }
}

