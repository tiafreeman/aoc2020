const fs = require("fs");

// fs.readFile("input.txt", (err, data) => {
//   if (err) throw err;
//   let arr = data.toString().split("\n");
//   let lower = 0;
//   let pre = arr.slice(lower, 25);
//   for (let i = 25; i < arr.length; i++) {
//     if (!sum(pre, parseInt(arr[i]))) {
//       //console.log(arr[i]);
//     }
//     lower++;
//     pre = arr.slice(lower, i + 1);
//   }
// });

// const sum = (pre, num) => {
//   let found = false;
//   for (let i = 0; i < pre.length; i++) {
//     for (let j = 0; j < pre.length; j++) {
//       if (i === j) {
//         continue;
//       } else {
//         if (parseInt(pre[i]) + parseInt(pre[j]) === num) {
//           found = true;
//           break;
//         }
//       }
//     }
//   }
//   return found;
// };

fs.readFile("input.txt", (err, data) => {
  let num = 22406676;
  if (err) throw err;
  let arr = data.toString().split("\n");

  for (let i = 0; i < arr.length - 11; i++) {
    if (
      parseInt(arr[i]) +
        parseInt(arr[i + 1]) +
        parseInt(arr[i + 2]) +
        parseInt(arr[i + 3]) +
        parseInt(arr[i + 4]) +
        parseInt(arr[i + 5]) +
        parseInt(arr[i + 6]) +
        parseInt(arr[i + 7]) +
        parseInt(arr[i + 8]) +
        parseInt(arr[i + 9]) +
        parseInt(arr[i + 10]) +
        parseInt(arr[i + 11]) +
        parseInt(arr[i + 12]) +
        parseInt(arr[i + 13]) +
        parseInt(arr[i + 14]) +
        parseInt(arr[i + 15]) +
        parseInt(arr[i + 16]) ===
      num
    ) {
      let numbers = [
        parseInt(arr[i]),
        parseInt(arr[i + 1]),
        parseInt(arr[i + 2]),
        parseInt(arr[i + 3]),
        parseInt(arr[i + 4]),
        parseInt(arr[i + 5]),
        parseInt(arr[i + 6]),
        parseInt(arr[i + 7]),
        parseInt(arr[i + 8]),
        parseInt(arr[i + 9]),
        parseInt(arr[i + 10]),
        parseInt(arr[i + 11]),
        parseInt(arr[i + 12]),
        parseInt(arr[i + 13]),
        parseInt(arr[i + 14]),
        parseInt(arr[i + 15]),
        parseInt(arr[i + 16]),
      ];
      numbers.sort(function (a, b) {
        return a - b;
      });
      console.log(numbers);
      //   console.log(parseInt(arr[i]) + parseInt(arr[i + 16]));
      break;
    }
  }
});
