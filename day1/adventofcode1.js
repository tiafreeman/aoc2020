const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  const arr = data.toString().split("\n");
  for (i = 0; i < arr.length; i++) {
    let remainder = 2020 - parseInt(arr[i]);
    if (arr.includes(remainder.toString())) {
      console.log(parseInt(arr[i]) * remainder);
      break;
    }
  }

  for (i = 0; i < arr.length - 1; i++) {
    let remainder = 2020 - (arr[i] + arr[i + 1]);
    if (remainder > 0) {
      // console.log(arr.includes(remainder));
      //console.log(remainder);
      // console.log(arr[i], arr[i + 1], remainder);
      if (arr.includes(remainder)) {
        console.log(arr[i] * arr[i + 1] * remainder);
      }
    }
  }
});
