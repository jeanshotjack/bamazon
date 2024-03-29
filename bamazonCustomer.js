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
            console.log("\r\nProduct ID: " + res[i].id + " || Product Name: " +
                res[i].product + " || Price: " + res[i].price) + "\r\n\r\n";
        }

        inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "\r\nwould you like to buy or exit?",
                choices: ["buy", "exit"]
            }
        ]).then(function (answer) {

            if (answer.choice === "buy") {
                buy();
            }
            else {
                connection.end();
            }
        });


    });
}

var promptUser2 = function () {
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "\r\nwould you like to buy or exit?",
            choices: ["buy", "exit"]
        }
    ]).then(function (answer) {

        if (answer.choice === "buy") {
            buy();
        }
        else {
            connection.end();
        }
    });
}

var buy = function () {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "\r\nEnter the product ID of the item you wish to purchase:",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "amount",
            type: "input",
            message: "\r\nEnter the quantity:",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false
            }
        }
    ]).then(function (res1) {

        var query = "Select * FROM products WHERE ?";
        connection.query(query, { "id": res1.ID }, function (err, res) {

            if (err) throw err;
            // IDEALLY, THE FOLLOWING LINES WOULD CHECK TO MAKE SURE THE ITEM EXISTS
            // for (i = 0; i < res.length; i++) {
            //     var item = res[i].id;
            //     if (item == res1.ID) {

                    var stock = res[0].quantity;
                    var price = res[0].price;

                    if (stock >= res1.amount) {
                        newStock = stock - res1.amount;

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    "quantity": newStock
                                },
                                {
                                    "id": res1.ID
                                }
                            ]);

                        purchasePrice = res1.amount * price;

                        console.log("\r\nYour purchase is successful and has cost you $" + purchasePrice);

                        promptUser2();

                    }

                    else {
                        console.log("\r\nThere isn't enough stock left! \r\n");

                        promptUser2();
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

