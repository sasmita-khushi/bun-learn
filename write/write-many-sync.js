import fs from "node:fs";
console.time("time")
fs.open("./data.txt", "w", (err, fd) => {
    if (err) {
        throw err;
    }
    for (let i = 0; i < 1000000; i++) {
        fs.writeSync(fd, `${i} `)
    }
    fs.close(fd, (err) => {
        if (err) {
            throw err;
        }
        console.log("file closed")
        console.timeEnd("time")
    })
})