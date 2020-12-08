const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    let arr = data.toString().split("\n");
    for (let i=0; i < arr.length; i++) {
        const ticket = arr[i].split('');
        let row = treeTraversal(127, ticket, 'F', 'B');
        let column = treeTraversal(7, ticket, 'L', 'R');
        console.log(row, column);
    }
});

const treeTraversal = (num, ticket, letter1, letter2) => {
    let divider = Math.floor(num/2);
    let range = [0, num];
    for (let j = 0; j < ticket.length - 1; j++) {
        if (ticket[j] === letter1) {
            range[1] = range[0] + divider;
        }
        else if (ticket[j] === letter2) {
            range[0] = range[0] + divider + 1;
        }
        divider = Math.floor(divider / 2);
    }
    return range[0];
    }