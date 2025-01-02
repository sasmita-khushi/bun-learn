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
      let chunk2 = this.array[this.index + 1]
        ? this.array[this.index].toString()
        : "";
      // this.push(chunk);
      setTimeout(() => {
        this.push({ value: chunk, i: this.index });
        this.push({ value: chunk2, i: this.index + 1 });

        this.index += 2;
      }, 1000);
    } else {
      this.push(null);
    }
  }
}

let ms = new MyStream(arr);

ms.on("data", (chunk) => {
  console.log(chunk);
});

ms.on("end", () => {
  console.log("reading done");
});
