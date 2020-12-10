const fs = require("fs");
let total = 0;
let bags = {};
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let arr = data.toString().split("\n");

  for (const arrs of arr) {
    // split bag types after outer bag type
    let innerBagTypes = arrs.replace(/.*?bags/, "").split(",");

    // trim to just bag name
    innerBagTypes = innerBagTypes.map((x) =>
      x
        .replace(/(bags|bag)/, "")
        .replace("contain", "")
        .replace(".", "")
        .trim()
    );

    // set object at outer bag type
    bags[arrs.replace(/bags.*/, "").trim()] = innerBagTypes;
  }
  //   console.log(bags);
  total = count(bags, bags["shiny gold"], 0);
  //   console.log(bags["shiny gold"]);
  console.log(total);
});

const count = (bags, bag, num) => {
  for (const innerBag of bag) {
    console.log(isNaN(innerBag.split(" ")[0]), innerBag);
    if (isNaN(innerBag.split(" ")[0])) {
      console.log("here");
      continue;
    } else {
      let tempNum = parseInt(innerBag.split(" ")[0]);
      let bagColour = innerBag.split(" ")[1] + " " + innerBag.split(" ")[2];
      if (num === 0) {
        total += tempNum;
        count(bags, bags[bagColour], tempNum);
      } else {
        console.log(total, tempNum);
        total += num * tempNum;

        console.log(total);
        console.log(bags[bagColour]);
        count(bags, bags[bagColour], num * tempNum);
      }
    }
  }
  return total;
};
