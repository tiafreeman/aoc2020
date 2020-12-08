const fs = require("fs");



let num = 0;

let bags = {}
fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    let arr = data.toString().split("\n");

    for (const arrs of arr) {
        // split bag types after outer bag type
        let innerBagTypes = arrs.replace(/.*?bags/, "").split(",");

        // trim to just bag name
        innerBagTypes = innerBagTypes.map(x => x.replace(/(bags|bag)/, "").replace('contain', '').replace('.', '').trim())

        // set object at outer bag type
        bags[arrs.replace(/bags.*/, "").trim()] = innerBagTypes;
    }

    num += count(bags, bags['shiny gold'], 1);
    console.log(num);
});




const count = (bags, bag, num) => {
    if (!bags[bag]) {
        return 0;
    }
    for (const innerBag of bag) {

    }




}