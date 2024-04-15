const http = require("http");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/reservations', (req, res) => {
    res.send('List of reservations');
});

app.get('/reservations/:name', (req, res) => {
    res.send('Reservation for ' + req.params.name);
});

app.get('/reservations/:name/:time', (req, res) => {
    res.send('Reservation for ' + req.params.name + ' at ' + req.params.time);
});

app.get('/reservations/:name/:time/:num', (req, res) => {
    res.send('Reservation for ' + req.params.name + ' at ' + req.params.time + ' for ' + req.params.num + ' people');
});

app.get('/reservations/:name/:time/:num/:day', (req, res) => {
    res.send('Reservation for ' + req.params.name + ' at ' + req.params.time + ' for ' + req.params.num + ' people on ' + req.params.day);
});

app.put('/reservations', (req, res) => {
    res.send('Add a reservation');
});

app.put('/reservations/:name', (req, res) => {
    res.send('Update reservation for ' + req.params.name);
});

app.delete('/reservations/:name', (req, res) => {
    res.send('Delete reservation for ' + req.params.name);
});

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });