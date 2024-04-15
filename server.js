const fs = require('fs');
const express = require('express');

let reservation = {
    name: 'Smith',
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