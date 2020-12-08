const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    let arr = data.toString().split("\n\n");

    answers = 0
    for (let i = 0; i < arr.length; i++) {
        let items = [];
        let data = arr[i].split('\n').join("").split((''));
        let count = 0;
        for (let j = 0; j < data.length; j++) {
            if (!items.includes(data[j])) {
                items.push(data[j]);
                count++;
            }
        }
        answers += count;
    }
    //console.dir(answers, {'maxArrayLength': null});
});

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    let arr = data.toString().split("\n\n");

    let answers = 0;
    for (let i = 0; i < arr.length; i++) {
        let items = [];
        let data = arr[i].split('\n');

        console.log(data);
        let amount = data.length;
        data = data.join('').split('');
        data.sort();
        let count = [];
        let prev = '';
        for (let j = 0; j < data.length; j++) {
            console.log(data[j]);
            if (data[j] !== prev) {
                count.push(1);
            } else {
                count[count.length - 1]++;
            }
            prev = data[j];
        }
        console.log(count);
        for (let l = 0; l < count.length; l++) {
            if (count[l] == amount) {
                answers++;
            }
        }
        //console.log(count);
    }
    console.dir(answers, {'maxArrayLength': null});
});