function wordToBinary(word) {
  return (
    word
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(16, "0")) //the padStart() method is used
      // to pad the beginning of a string with another string. padStart(targetLength ,padString)
      .join(" ")
  );
}

console.log(wordToBinary("khushi☺️"));
