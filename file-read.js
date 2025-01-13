import fs from "node:fs/promises";

const watcher = await fs.watch("./foo.txt")
const fileHandler = await fs.open("./foo.txt", "r");



fileHandler.on("foo", async () => {
    let { size } = await fileHandler.stat()
    let buff = Buffer.alloc(size)
    let content = await fileHandler.read({ buffer: buff, offset: 0, length: size, position: 0 })
    console.log(content.buffer.toString())
})


for await (const event of watcher) {
    if (event.eventType === "change") {
        fileHandler.emit("foo")
    }
}


