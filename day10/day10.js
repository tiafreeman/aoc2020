const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");
  let jolts = arr.map((item) => parseInt(item));

  jolts.sort(function (a, b) {
    return a - b;
  });
  console.dir(jolts, { maxArrayLength: null });
  let one = 1;
  let three = 1;
  for (let i = 0; i < jolts.length; i++) {
    if (jolts[i + 1] - jolts[i] === 1) {
      one++;
    } else if (jolts[i + 1] - jolts[i] === 3) {
      three++;
    }
  }
  console.log(one * three);
});

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");
  let jolts = arr.map((item) => parseInt(item));

  jolts.sort(function (a, b) {
    return a - b;
  });
  console.dir(jolts, { maxArrayLength: null });
  let one = 1;
  let three = 1;
  for (let i = 0; i < jolts.length; i++) {
    if (jolts[i + 1] - jolts[i] === 1) {
      one++;
    } else if (jolts[i + 1] - jolts[i] === 3) {
      three++;
    }
  }
  console.log(one * three);
});
