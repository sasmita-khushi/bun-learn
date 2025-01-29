import fs from "node:fs/promises";

console.time("time");
const filehandle = await fs.open("./b.txt");
const ws = filehandle.createWriteStream();


ws.on("drain", () => {
    // console.log("drained");
    i++;
    loop();
});

let i = 0;

ws.on("finish", () => {
    console.timeEnd("time");
}
)
function loop() {
    while (i < 1000000) {

        let success = ws.write(`${i} `);
        console.log(ws.writableHighWaterMark, ws.writableLength);

        if (!success) {
            // console.log("not success", i);
            break;
        } else {
            i++;
            if (i === 1000000) {
                ws.end("last write");

            }
        }
    }
}


loop();

