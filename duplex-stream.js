import { createWriteStream, createReadStream } from "node:fs";
import { Duplex, PassThrough } from "node:stream";


const rs = createReadStream("./y.txt");
const ws = createWriteStream("./w.txt");

class Throttle extends Duplex {
    constructor(ms) {
        super();
        this.delay = ms;
    }
    _write(chunk, encoding, callback) {
        this.push(chunk);
        setTimeout(callback, this.delay);
    }
    _read() {

    }

    _final() {
        this.push(null);
    }

}

const report = new PassThrough();
const throttle = new Throttle(1000);

var total = 0;
report.on("data", (chunk) => {
    total += chunk.length;
    console.log("bytes : ", total);
});
rs.pipe(throttle).pipe(report).pipe(ws);