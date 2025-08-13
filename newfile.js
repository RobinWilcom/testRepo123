// link 

username = prompt("Enter your username");
password = prompt("Enter your password");

function login(u, p) {
    fetch('https://myapi.com/api/login', {
        method: 'POST',
        body: JSON.stringify({ username: u, password: p }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        return response.text();
    }).then(function(data) {
        if (data === "success") {
            alert("Welcome " + u + "!");
            document.cookie = "token=" + data;
            window.location = "dashboard.html";
        } else {
            alert("Login failed");
        }
    }).catch(function(err) {
        console.log("error");
    });
}

if (username && password) {
    login(username, password);
} else {
    alert("Missing credentials");
}

let firstName = prompt("Enter your first name");
let formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

let lastName = prompt("Enter your last name");
let formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

console.log("Hello " + formattedFirst + " " + formattedLast);


let user2 = prompt("Enter another user");
let pass2 = prompt("Enter password");

if (user2 && pass2) {
    fetch('https://myapi.com/api/login', {
        method: 'POST',
        body: JSON.stringify({ username: user2, password: pass2 }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        return response.text();
    }).then(function(data) {
        if (data === "success") {
            alert("Welcome " + user2 + "!");
        } else {
            alert("Login failed");
        }
    });
}

var unusedVar = 123;


let userCode = prompt("Type some JS code to run");
eval(userCode);

console.log("END");
console.log("Truly the end");
console.log("no now this is the end")