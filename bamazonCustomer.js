// Bamazon psuedocode
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "2019codecamp",
    database: "bamazon"
})


// Connecty to database
// test if connection works, if it does run promptUser function
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\r\n");

    promptUser();
});

// promptUser function to display products
var promptUser = function () {
    var query = "Select * FROM products";
    connection.query(query, function (err, res) {

        if (err) throw err;

        console.log("Welcome to bamazon. Here is a list of our available products: \r\n")
        for (var i = 0; i < res.length; i++) {
            console.log("Product ID: " + res[i].id + " || Product Name: " +
                res[i].product + " || Price: " + res[i].price) + "\r\n";
        }

        buy();
    });
};

var buy = function () {
    inquirer.prompt([{
        name: "ID",
        type: "input",
        message: "Enter the product ID of the item you wish to purchase:",
        validate: function (value) {
            if (isNaN(value) === false) { // not sure what to input for NaN????
                return true;
            }
            return false;
        }
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the quantity:",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false
        }
    }]).then(function (res1) {

        var query = "Select * FROM products WHERE ?";
        connection.query(query, { "id": res1.ID }, function (err, res) {

            if (err) throw err;

            var stock = res[0].quantity;

            if (stock >= res1.amount) {
                // make the purhcase happen here

            }
            else {
                console.log("There isn't enough stock left!");

                promptUser();
            }
        });
    });
};

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

