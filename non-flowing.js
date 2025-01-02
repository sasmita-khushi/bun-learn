import { Readable } from "stream";

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

class MyStream extends Readable {
  constructor(array) {
    super({ objectMode: true });
    this.index = 0;
    this.array = array;
  }
  _read() {
    if (this.index < this.array.length) {
      let chunk = this.array[this.index].toString();

      this.push({ value: chunk, i: this.index });
      this.index++;
    } else {
      this.push(null);
    }
  }
}

let ms = new MyStream(arr);
ms.pause(); //convert to non-flowing mode

ms.on("data", (chunk) => {
  console.log(chunk);
});

ms.on("end", () => {
  console.log("reading done");
});

process.stdin.on("data", (chunk) => {
  //   ms.read();

  let msg = chunk.toString().trim();
  if (msg === "start") {
    ms.resume(); //convert to flowing mode
  } else {
    ms.read();
  }
});
