import fs from "node:fs/promises";

const CREATE_FILE = "create a file"
const DELETE_FILE = "delete file"
const WRITE_TO_FILE = "write to file"
const RENAME_FILE = "rename file"
const ADD_TO_FILE = "add to the file"

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
    //rename file <oldFileName> to <newFileName>
    else if (content.includes(RENAME_FILE)) {

        const _idx = content.indexOf(" to ");
        const oldFileName = content.substring(RENAME_FILE.length + 1, _idx);
        const newFileName = content.substring(_idx + 4);
        try {
            await fs.rename(oldFileName, newFileName);

        } catch (e) {
            // console.log(e);
        }

    }
    //add to the file <path> this content: <content>
    else if (content.includes(ADD_TO_FILE)) {
        let nextSpaceIndex = content.indexOf(" ", ADD_TO_FILE.length + 1)
        console.log("index----", nextSpaceIndex)
        const addToFilePath = content.substring(ADD_TO_FILE.length + 1, nextSpaceIndex);
        const contentWritten = content.substring(nextSpaceIndex + 1)
        console.log("path------", addToFilePath);
        console.log("content------------", contentWritten)
        if (addToFilePath) {
            await fs.appendFile(addToFilePath, contentWritten)


        }
    }
})


for await (const event of watcher) {
    if (event.eventType === "change") {
        fileHandler.emit("foo")
    }
}

