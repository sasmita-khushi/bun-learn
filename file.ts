//TO WRITE

const data = "I Love Javascript! ";
await Bun.write("output.txt", data);

//TO READ
const file = await Bun.file("output.txt");
console.log(await file.text());
console.log(file.size);
