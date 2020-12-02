const fs = require("fs");
let arr = [];

fs.readFile("adventofcode2input.txt", (err, data) => {
  if (err) throw err;
  arr = data.toString().split("\n");
  let count = 0;
  arr.map((password) => {
    let letter = password.split(":")[0].split(" ")[1];
    let num = password.split(":")[0].split(" ")[0].split("-");
    password = password.split(": ")[1];
    // console.log(letter, num, password);

    numChar = password.split(letter).length - 1;
    if (numChar >= parseInt(num[0]) && numChar <= parseInt(num[1])) {
      //   console.log(letter, num, password);
      count++;
    }
  });
});

fs.readFile("adventofcode2input.txt", (err, data) => {
  if (err) throw err;
  arr = data.toString().split("\n");
  let count = 0;
  arr.map((password) => {
    let letter = password.split(":")[0].split(" ")[1];
    let num = password.split(":")[0].split(" ")[0].split("-");
    password = password.split(": ")[1];
    // console.log(letter, num, password);
    password = password.split("");
    if (password[num[0] - 1] === letter) {
      if (password[num[1] - 1] !== letter) {
        count++;
      }
    } else if (password[num[1] - 1] === letter) {
      count++;
    }
  });
  console.log(count);
});
