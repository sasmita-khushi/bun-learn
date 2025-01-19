import fs from "node:fs/promises";

const fileHandle = await fs.open("./text.txt", "r");

// Create a buffer to store the data read
const buffer = Buffer.alloc(5);

// Specify the offset, length, and position
const offset = 0;
const length = buffer.length;
const position = 0;

//reading file 
const { bytesRead, buffer: dataBuffer } = await fileHandle.read(buffer, offset, length, position);

//OR
// const result = await fileHandle.read(buffer, offset, length, position);
// const bytesRead = result.bytesRead;
// const dataBuffer = result.buffer;


console.log("file reads in bytes", bytesRead);

console.log('Data:', dataBuffer.toString());

// Close the file handle
await fileHandle.close();
