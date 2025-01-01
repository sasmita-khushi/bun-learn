import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let myName = await rl.question("What is your name? ");
console.log(`my name is ${myName}`);
rl.close();
