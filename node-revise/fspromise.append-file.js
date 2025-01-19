import fspromise from "fs/promises";
fspromise.appendFile("./z.txt", "hello khushi",).then(() => {
    console.log("Data append to the file sucessfully.")
}).catch((err) => {
    console.log("Error appending data to file:", err.message)
})