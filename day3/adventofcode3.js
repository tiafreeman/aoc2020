const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");
  let count = 0;
  for (i = 1; i < arr.length; i++) {
    // console.log(arr[i].split("")[i * 3]);
    if (arr[i].split("")[i % arr[i].split("").length] === "#") {
      count++;
    }
  }
  console.log("1", count);
});

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");
  let count = 0;
  for (i = 1; i < arr.length; i++) {
    // console.log(arr[i].split("")[i * 3]);
    if (arr[i].split("")[(i * 3) % arr[i].split("").length] === "#") {
      count++;
    }
  }
  console.log("2", count);
});

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");
  let count = 0;
  for (i = 1; i < arr.length; i++) {
    // console.log(arr[i].split("")[i * 3]);
    if (arr[i].split("")[(i * 5) % arr[i].split("").length] === "#") {
      count++;
    }
  }
  console.log("3", count);
});

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");
  let count = 0;
  for (i = 1; i < arr.length; i++) {
    // console.log(arr[i].split("")[i * 3]);
    if (arr[i].split("")[(i * 7) % arr[i].split("").length] === "#") {
      count++;
    }
  }
  console.log("4", count);
});

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    arr.splice(i + 1, 1);
  }
  for (i = 1; i < arr.length; i++) {
    // console.log(arr[i].split("")[i * 3]);
    if (arr[i].split("")[i % arr[i].split("").length] === "#") {
      count++;
    }
  }
  console.log("5", count);
});
