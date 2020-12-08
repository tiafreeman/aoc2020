const fs = require("fs");



let num = 0;
let bags = {};
fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    let arr = data.toString().split("\n");

    for (const arrs of arr) {
        // split bag types after outer bag type
        let innerBagTypes = arrs.replace(/.*?bags/, "").split(",");
        // trim to just bag name
        innerBagTypes = innerBagTypes.map(x => x.replace(/.*\d /, "").replace(/[^a-zA-Z ]/g, "").replace(/(bags|bag)/, "").trim())
        // set object at outer bag type
        bags[arrs.replace(/bags.*/, "").trim()] = innerBagTypes;
    }

    for (const bag in bags) {
        if (count(bags, bag)) {
            num++;
        }
    }
    console.log(num);
});




const count = (bags, bag) => {
        if (!bags[bag]) {
            return false;
        }
        if (bags[bag].includes('shiny gold')) {
            return true;
        }
        let innerBagContainsGold = false;
    for (const innerBag of bags[bag]) {
            if (count(bags, innerBag)) {
                innerBagContainsGold = true;
            }
            }

        return innerBagContainsGold;


}