import fs from "node:fs";

//const filehandle = await fs.open("text.txt", "r");
//const filehandle2 = await fs.open("y.txt", "w");

const rs = fs.createReadStream("./text.txt", { highWaterMark: 17, encoding: "utf-8" });
const ws = fs.createWriteStream("./y.txt");



let leftOver = "";

rs.on("data", (chunk) => {
    const str = leftOver + chunk;
    //console.log({ leftOver, chunk });

    const words = str.split(" ");
    //console.log({ words });

    leftOver = words[words.length - 1];
    const _word = words.slice(0, words.length - 1);

    // console.log({ leftOver });
    // console.log({ _word })

    let odds = _word.filter((word) => parseInt(word, 10) % 2);
    //console.log(odds);
    let nums = odds.join(" ") + " "
    //console.log(nums);
    ws.write(nums);
})

rs.on("end", () => {
    console.log("reading end")
    ws.close();
    rs.close();

});