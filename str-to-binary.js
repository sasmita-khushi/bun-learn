//STRING TO BINARY BY NOT USING BUFFER;

let x = "!Hi";
let arr = [];

x.split("").forEach((char) => {
  //arr.push(char.charCodeAt(0));
  console.log(char.charCodeAt(0).toString(2).padStart(8, 0));
});

//console.log(arr);

//STRING TO BINARY BY USING BUFFER;
import { Buffer } from "buffer";
let bf = Buffer.from("Hi!", "utf-8");
bf.forEach((e) => {
  console.log(e.toString(2).padStart(8, 0));
});
