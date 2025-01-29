import fs from "node:fs/promises";

fs.copyFile("./readfile.js", "./z.txt", (err) => {
    if (err) {
        console.log("errror")
    }
})