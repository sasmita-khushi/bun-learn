// import fs from "node:fs";

// fs.open("./text.txt", "a", (err, fd) => {
//     if (err) {
//         return console.log("error found");
//     }
//     console.log(fd);

//     fs.writeFile(fd, "hey khushi!", (err) => {
//         if (err) {
//             console.log("err");
//         }
//         console.log("written sucessfully");

//         fs.close(fd, (err) => {
//             if (err) {
//                 console.log("error found")
//             }
//             console.log("closing file sucessfully");
//         })
//     })
// })

//WRITE FILE IN PROMISE :
import fs from "node:fs/promises";

let filehandle = await fs.open("./text.txt", "a");
await filehandle.writeFile("hello dear")