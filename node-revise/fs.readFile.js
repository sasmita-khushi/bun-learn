import fs from "node:fs"

// fs.readFile('./y.txt', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data.toString());
// });


// READ A TEXT FILE WITH SPECIfied Encoding

// fs.readFile("./y.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("error in reading file", err);
//         return;
//     }
//     console.log("file content:", data)
// })

fs.readFile("./a.json", "utf-8", (err, data) => {
    if (err) {
        console.log("error in reading file", err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        console.log("jsonData:", jsonData)
    }
    catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
