const fs = require("fs");

// fs.readFile("input.txt", (err, data) => {
//   if (err) throw err;
//   let arr = data.toString().split("\n\n");
//   arr = arr.map((passport) => passport.split(/\n| /));

//   const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
//   let valid = 0;
//   for (i = 0; i < arr.length; i++) {
//     let count = 0;
//     let data = arr[i].forEach((item) => {
//       item = item.split(":");
//       if (fields.includes(item[0]) && item[1]) {
//         count++;
//       }
//     });
//     if (count === 7) {
//       valid++;
//     }
//   }
//   console.log(valid);
// });

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n\n");
  arr = arr.map((passport) => passport.split(/\n| /));

  let totalValid = 0;
  let answers = [];
  for (i = 0; i < arr.length; i++) {
    let valid = true;
    if (arr[i].length < 7) {
      valid = false;
    }
    if (arr[i].length === 7) {
      let test = [];
      test = arr[i].filter((item) => item.split(":").includes("cid"));
      if (test.length > 0) {
        valid = false;
      }
    }
    for (j = 0; j < arr[i].length; j++) {
      arr[i][j] = arr[i][j].split(":");
    }
    arr[i].forEach((item) => {
      switch (item[0]) {
        case "byr":
          if (parseInt(item[1]) < 1920 || parseInt(item[1]) > 2002) {
            valid = false;
          }
          break;
        case "iyr":
          if (parseInt(item[1]) < 2010 || parseInt(item[1]) > 2020) {
            valid = false;
          }
          break;
        case "eyr":
          if (parseInt(item[1]) < 2020 || parseInt(item[1]) > 2030) {
            valid = false;
          }
          break;
        case "hgt":
          if (item[1].slice(-2) === "cm") {
            if (
              parseInt(item[1].slice(0, -2)) < 150 ||
              parseInt(item[1].slice(0, -2)) > 193
            ) {
              valid = false;
            }
          } else if (item[1].slice(-2) === "in") {
            if (
              parseInt(item[1].slice(0, -2)) < 59 ||
              parseInt(item[1].slice(0, -2)) > 76
            ) {
              valid = false;
            }
          } else {
            valid = false;
          }
          break;
        case "hcl":
          let hcl = item[1].split("");
          if (hcl[0] !== "#") {
            valid = false;
          }
          break;
        case "ecl":
          let ecl = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
          if (!ecl.includes(item[1])) {
            valid = false;
          }
          break;
        case "pid":
          let pid = item[1].split("");
          if (pid.length !== 9 || isNaN(item[1])) {
            valid = false;
          }
          break;
        default:
      }
    });

    // console.log(arr[i], valid);
    if (valid) {
      answers.push(arr[i]);
      totalValid++;
    }
  }
  // console.log(answers, { maxArrayLength: null });
  // console.log(answers.length);
  console.log(totalValid);
});
