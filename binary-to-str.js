// 0100 1000 0110 1001 0010 0001

// BINARY TO STRING BY USING BUFFER.

// import { Buffer } from "buffer";

// const Buff = Buffer.alloc(3);//[0,0,0]
// Buff[0] = 0x48;
// Buff[1] = 0x69;
// Buff[2] = 0x21;

// console.log(Buff.toString("utf-8"));

//0100 1000 0110 1001 0010 0001

// import { Buffer } from "buffer";

// const buff = Buffer.alloc(3);

// buff[0] = parseInt("01001000", 2);
// buff[1] = parseInt("01101001", 2);
// buff[2] = parseInt("00100001", 2);
// console.log(buff.toString("utf-8"));

import { Buffer } from "buffer";
const buff = Buffer.from([
  parseInt("01001000", 2),
  parseInt("01101001", 2),
  parseInt("00100001", 2),
]);

console.log(buff.toString("utf-8"));





