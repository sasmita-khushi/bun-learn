import fs from "node:fs/promises";

const fileHandle = await fs.open("./text.txt", "w");
console.log("file Descriptor:", fileHandle.fd)

// Writing data to the file
fileHandle.write("Heloooooooo")


// Ensures the data is flushed to disk
fileHandle.datasync();
console.log("data is now safely written to disk");

//Closing file
await fileHandle.close();