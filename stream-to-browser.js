import { createServer } from "node:http";
import { stat, createReadStream } from "node:fs";
const fileName = "./snail.mp4";

createServer((req, res) => {

    stat(fileName, (err, stats) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain", "Content-Length": stats.size });

            res.end("File not found");
            return;
        }

        //file size:
        const fileSize = stats.size;
        console.log(`File Size : ${fileSize} bytes`);

        //range request:
        const range = req.headers.range;
        if (range) {
            let [start, end] = range.replace(/bytes=/, "").split("-");
            start = parseInt(start, 10);
            end = end ? parseInt(end, 10) : fileSize - 1;
            res.writeHead(206, {
                "content-range": `bytes ${start}-${end}/${fileSize}`,
                "accept-ranges": "bytes",
                "content-length": (end - start) + 1,
                "content-type": "video/mp4",
            });
            createReadStream(fileName, { start, end }).pipe(res);
        }
        else {

            res.writeHead(200, { "content-type": "video/mp4", "content-length": fileSize });

            createReadStream(fileName).pipe(res);
        }

    });

}).listen(3000, () => console.log("server running on port 3000"));

