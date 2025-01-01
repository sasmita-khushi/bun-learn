import * as readline from "node:readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let filename = await rl.question("Enter filename: ");
rl.close();

let url = `http://localhost:3000/${filename}`;
let res = await fetch(url);
console.log(res.status);
if (res.ok) {
  //let filename = await res.text();
  let path = `./x/${filename}`;
  await Bun.write(path, res);
  console.log("successfully File saved at:", path);
} else {
  console.log(`failed to get ${filename}`);
}
