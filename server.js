const fs = require('fs');

function addReservation(resList, res) {
    resList.push(res);
}

function updateReservation(resList, res) {
    let found = resList.find((elt) => elt.name === res.name);
    if (found) {
        found.time = res.time;
        found.num = res.num;
    }
}

function deleteReservation(resList, name) {
    let foundIndex = resList.findIndex((elt) => elt.name === name);
    if (foundIndex >= 0) {
        resList.splice(foundIndex, 1);
    }
}

function listReservations(resList) {
    resList.forEach((elt) => {
        console.log(`Name: ${elt.name}, Num: ${elt.num}, Time: ${elt.time}`);
    });
}

function viewReservation(resList, name) {
    let found = resList.find((elt) => elt.name === name);
    if (found) {
        console.log(`Name: ${found.name}, Num: ${found.num}, Time: ${found.time}`);
    }
}

function addUserName(resList, name) {
    let found = resList.find((elt) => elt.name === name);
    if (!found) {
        resList.push({name: name, time: '', num: 0});
    }
}

let reservation = {
    name: 'Smith',
    day: 'Monday',
    time: '0900',
    num: 4

};

let resList = [
    {
        name: 'Smith',
        time: '0900',
        num: 4
    },
    {
        name: 'Jones',
        time: '1100',
        num: 2
    },
    {
        name: 'Johnson',
        time: '1300',
        num: 42
    }
];

let millerRes = {};
millerRes.name = 'Miller';
millerRes.time = '1800';
millerRes.num = 3;

resList.push(millerRes);

resList.splice(0, 1, {name: 'Pete', time: '2200', num: 9});

resList.forEach((elt) => {
    console.log(`Name: ${elt.name}, Num: ${elt.num}, Time: ${elt.time}`);

});

console.log("---");

resList.sort((res1, res2) => {
    if (res1.num < res2.num) return 1;
    if (res1.num > res2.num) return -1;
    
    if (res1.time < res2.time) return -1;
    if (res1.time > res2.time) return 1;
});

fs.writeFile('resList1.json', JSON.stringify(resList), err => {
    if (err) throw err;
    console.log('Saved file');

});