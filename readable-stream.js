import fs from "node:fs";

// const filehandle = await fs.open("./text.txt", "r")
// const filehandle2 = await fs.open("./y.txt", "w")


const rs = fs.createReadStream("./text.txt");
const ws = fs.createWriteStream("./y.txt")
// const rs = filehandle.createReadStream();
// const ws = filehandle2.createWriteStream();



// ws.on("drain", () => {
//     rs.resume();
// });

// rs.on("data", (chunk) => {
//     console.log(chunk.toString());
//     if (!ws.write(chunk)) {
//         rs.pause();
//     }
// })


// rs.on("end", () => {
//     console.log("reading end")
//     ws.close();
//     rs.close();

// })


//THIS PROCESS IS CALLED BACKPRESSURE HANDLING.

//Only To written:

rs.pipe(ws); //pipe method automatically handle blackpressure.