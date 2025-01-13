import fs from "node:fs";
console.time("time")
fs.open("./data.txt", "w", (err, fd) => {
    if (err) {
        throw err;
    }
    for (let i = 0; i < 1000000; i++) {
        fs.write(fd, `${i} `, (err, bytesWriteen) => {
            // console.log(bytesWriteen)
        })
    }
    fs.close(fd, (err) => {
        if (err) {
            throw err;
        }
        console.log("file closed")
        console.timeEnd("time")
    })
})