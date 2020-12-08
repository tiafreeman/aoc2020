const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");
  let codeRun = [];

  arr.forEach((item) => codeRun.push(0));
  //   arr[311] = "jmp +47";
  arr[434] = "nop -65";
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].split(" ");
    if (codeRun[i] > 0) {
      console.log(accumulator);
      console.log(arr[i]);
      break;
    } else if (code[0] === "acc") {
      accumulator += parseInt(code[1]);
      console.log(arr[i]);
      codeRun[i] = codeRun[i] + 1;
    } else if (code[0] === "jmp") {
      console.log(arr[i], accumulator);
      i = i + parseInt(code[1]) - 1;
    } else if (code[0] === "nop") {
      console.log(arr[i]);
      continue;
    }
  }
});
