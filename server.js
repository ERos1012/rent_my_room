const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    const { method, url } = req;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (method === "GET" && url === "/add_reservation") {
        res.statusCode = 200;
        addReservation(resList, reservation);
        res.end("Add reservation");
    } else if (method === "GET" && url === "/update_reservation") {
        res.statusCode = 200;
        updateReservation(resList, reservation);
        res.end("Update reservation");
    }
    else if (method === "GET" && url === "/delete_reservation") {
        res.statusCode = 200;
        deleteReservation(resList, reservation.name);
        res.end("Delete reservation");
    }
    else if (method === "GET" && url === "/list_reservations") {
        res.statusCode = 200;
        listReservations(resList);
        res.end("List reservations");
    }
    else if (method === "GET" && url === "/view_reservation") {
        res.statusCode = 200;
        viewReservation(resList, reservation.name);
        res.end("View reservation");
    }
    else if (method === "GET" && url === "/add_user_name") {
        res.statusCode = 200;
        addUserName(resList, reservation.name);
        res.end("Add user name");
    }
    else {
        res.statusCode = 404;
        res.end("Not found");
    }
});

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


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  