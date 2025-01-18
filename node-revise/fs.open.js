import fs from "node:fs/promises";

// Open the file
const fileHandler = await fs.open("./text.txt", "r");
console.log("File opened successfully.");

// Do something with the file (e.g., read data)
// Close the file

await fileHandler.close();
console.log("File closed successfully.");


