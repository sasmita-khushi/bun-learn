import fs from "node:fs"


fs.open('./file1.txt', 'r', (err, fd1) => {
    console.log('fd for file1:', fd1);
});

fs.open('./file2.txt', 'r', (err, fd2) => {
    console.log('fd for file2:', fd2);
});

fs.open('./file3.txt', 'r', (err, fd3) => {
    console.log('fd for file3:', fd3);
});