console.time("hello");

const file = Bun.file("./text.txt");
const writer = file.writer();

for (let i = 0; i < 1000000; i++) {
    writer.write(`${i} `)
    //writer.flush();
}

writer.end();

console.timeEnd("hello");