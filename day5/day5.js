const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    let arr = data.toString().split("\n");

    let seats = ['0-63', '64-127', '0-31', '32-63', '64-95', '96-127', '0-15', '16-31', '32-47', '48-63', '64-79', '80-95', '96-111', '112-127'];

    let ticketID = [];
    for (let i=0; i < arr.length; i++) {
        let temp = 0;
        let increment = 0;
        const ticket = arr[i].split('');
        for (let j = 0; j < 3; j++) {
            if (ticket[j] === 'F') {
                temp += temp + 0 + increment;
            }
            else if (ticket[j] === 'B') {
                temp += temp + 1 + increment;
            }
            if (increment === 0) {
                increment = increment + 2;
            }
        }
        let range = seats[temp].split('-');
        range[0] = parseInt(range[0]);
        range[1] = parseInt(range[1]);
        let divider = 7;
        for (let m = 3; m < ticket.length -3; m++) {
            if (ticket[m] === 'F') {
                range[1] = range[0] + divider;
            }
            else if (ticket[m] === "B") {
                range[0] = range[0] + divider + 1;
            }
            divider = Math.floor(divider / 2);
        }


        divider = 3;
        let columns = [0, 7];
        for (let c = 7; c < ticket.length; c++) {
            if (ticket[c] === "L") {
                columns[1] = columns[0] + divider;
            }
            else if (ticket[c] === "R") {
                columns[0] = columns[0] + 1 + divider;
            }
            divider = Math.floor(divider / 2);
        }

        ticketID.push([range[0] * 8 + columns[0]], columns[0]);

    }
    console.dir(ticketID, {'maxArrayLength': null});
    ticketID.sort(function(a,b) {
        return a - b;
    });

    for (let i = 1; i < ticketID.length - 11; i++) {
        if (ticketID[i-1] - ticketID[i] > 1 || ticketID[i + 1] - ticketID[i] > 1) {
            console.log(ticketID[i]);
        }
    }

});


