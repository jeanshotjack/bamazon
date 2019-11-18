// Bamazon psuedocode
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "2019codecamp",
    database: ""
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\r\n");
    chartSearch();
});
// Connecty to database
// test if connection works, if it does run promptUser function


//In promptUser function
// display avail products display id numbers
// use inquirer to ask user for ID of the products they want - as input
// query db to check if ID number exists in DB 
        // select * from products where id = userResponse
        // when we get response from DB check if the length of the response is greater than zzero
        // console log response
        // if not, tell user insufficient amount, call promptUser function again

// use inquirer again to ask quantity user wants
// check quantity from the database query response, see if it's greater than or equal to number that the user wants ( if statement )
// if users request is greater than the available quantity, tell the user it's not in stock and call promptUser again

// if there are enough in stock calc what the new wuantity wikl be by subtracting the user quantity gtom current quantity 
//query DB to update new quantity
//use update function from greatbay
// new quantity where ID is the ID that the user chose
// tell user success, tell them how much they paid
    // multiply quantity by the price of product

