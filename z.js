let x = 'write to file ./foo.txt hello manas';

let command = "write to file";

if (x.includes(command)) {
    let nextSpaceIndex = x.indexOf(" ", command.length + 1);
    let fileName = x.substring(command.length + 1, nextSpaceIndex);
    let content = x.substring(nextSpaceIndex + 1);
    console.log(fileName);
    console.log(content);
}