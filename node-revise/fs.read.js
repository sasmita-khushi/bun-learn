import fs from "node:fs";

fs.open("./y.txt", "r", (err, fd) => { //fd:file descriptor- A file descriptor as a "ticket" or "pointer" to an open file
    if (err) {
        return console.error('Error opening file:', err.message);
    }

    console.log("file descriptor", fd);

    const buffer = Buffer.alloc(100); //the buffer that the data will be written to.
    const offset = 0; //The position in buffer to write the data to.
    const length = buffer.length; //The number of bytes to read.
    const position = 0; //Specifies where to begin reading from in the file.

    fs.read(fd, buffer, offset, length, position, (err, bytesRead) => {
        if (err) {
            console.error('Error reading file:', err.message);
        } else {
            console.log('Data received:', buffer.toString('utf-8', 0, bytesRead));
        }
        fs.close(fd, (err) => {
            if (err) {
                console.error('Error closing file:', err.message);
            } else {
                console.log('File closed successfully.');
            }
        });


    });
});

