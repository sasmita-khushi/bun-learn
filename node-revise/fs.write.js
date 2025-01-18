// import fs from "node:fs";

// // Open a file in write mode
// fs.open('text.txt', 'w', (err, fd) => {
//     if (err) {
//         return console.error('Error opening file:', err);
//     }

//     const buffer = Buffer.from('Hello, World!');
//     const offset = 0;
//     const length = buffer.length;
//     const position = null; // Append or write at the current position

//     // Write to the file
//     fs.write(fd, buffer, offset, length, position, (err, bytesWritten, buffer) => {
//         if (err) {
//             return console.error('Error writing to file:', err);
//         }

//         console.log(`${bytesWritten} bytes written to file.`);
//         console.log('Data written:', buffer.toString());

//         // Close the file descriptor
//         fs.close(fd, (err) => {
//             if (err) {
//                 console.error('Error closing file:', err);
//             }
//         });
//     });
// });




//fs.write(fd, string[, position[, encoding]], callback)

import fs from "node:fs";

// Open a file
fs.open('text.txt', 'w', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log(fd);

    // Write to the file
    fs.write(fd, 'Hii khushi', 0, 'utf8', (err, written, string) => {
        if (err) {
            return console.error(err);
        }
        console.log(`${written} bytes written to file.`);
        console.log(`Written string: ${string}`);

        // Close the file
        fs.close(fd, (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('File closed successfully.');
        });
    });

});
