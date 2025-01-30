import fs from "node:fs/promises";

const destFile = await fs.open("./y.txt", "w");
const result = await fs.readFile("./text.txt");

await destFile.write(result);