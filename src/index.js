const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    const segment = expr.slice(i, i + 10).replace(/^0+/, "");
    if (segment[0] === "*") {
      result += " ";
    } else {
      let key = "";
      for (let i = 0; i < segment.length; i += 2) {
        key += segment.slice(i, i + 2) === "10" ? "." : "-";
      }
      result += MORSE_TABLE[key];
    }
  }
  return result;
}

module.exports = {
  decode,
};
