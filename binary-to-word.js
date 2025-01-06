function binaryToWord(binaryString) {
  return binaryString
    .split(" ")
    .map((e) => String.fromCharCode(parseInt(e, 2)))
    .join("");
}

const binary =
  "0000000001101011 0000000001101000 0000000001110101 0000000001110011 0000000001101000 0000000001101001 0010011000111010 1111111000001111";
console.log(binaryToWord(binary));
