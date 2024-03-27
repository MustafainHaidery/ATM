import inquirer from "inquirer";

let AccountBalanace = 25000;
let pin = 1111;
console.log("*****WELCOM TO HABIB METRO BANK LIMITED*****");
console.log("Please Enter Your ATM Card Pin");
let user = await inquirer.prompt([{
        name: "userpininput",
        type: "number",
        message: "Enter pin code :",
    }]);
if (user.userpininput === pin) {
    console.log("Please Wait");
    let choose = await inquirer.prompt([{
            message: "Select opition?",
            type: "list",
            name: "selecttransaction",
            choices: ["Balance inquiry", "Cash Withdraw", "Amount Transfer", "Cash Deposit", "Account Information"],
        }]);
    if (choose.selecttransaction === "Balance inquiry") {
        console.log(AccountBalanace);
    }
    else if (choose.selecttransaction === "Cash Withdraw") {
        let Withdraw = await inquirer.prompt([{
                message: "Enter amount to withdraw : ",
                type: "number",
                name: "withdrawamount"
            }]);
        if (Withdraw.withdrawamount > AccountBalanace) {
            console.log("insufficient Balance");
        }
        else if (Withdraw.withdrawamount <= AccountBalanace) {
            AccountBalanace = AccountBalanace - Withdraw.withdrawamount;
            console.log("Remaining Balanace in Your Account: ", AccountBalanace);
        }
    }
    else if (choose.selecttransaction === "Amount Transfer") {
        let transferamount = await inquirer.prompt([{
                message: "please enter Account Number To Transfer Payment :",
                type: "number",
                name: "transferamountaccountnumber"
            },
            {
                message: "Please enter amount in PKR :",
                type: "number",
                name: "transferamountinPKR"
            },
            {
                message: "Select bank ",
                type: "list",
                name: "transferamountbank",
                choices: ["Habib bank", "Bank AL Habib ", "Habib Metro Bank", "Meezan Bank"],
            }
        ]);
        AccountBalanace = AccountBalanace - transferamount.transferamountinPKR;
        console.log("Amount Transfer Successfully");
        console.log("Remaining Amount In your Account", AccountBalanace);
    }
    else if (choose.selecttransaction === "Cash Deposit") {
        let cashdepositamount = await inquirer.prompt([{
                message: "Enter Deposit Amount ",
                type: "number",
                name: "depositamountinPKR"
            }]);
        AccountBalanace = AccountBalanace + cashdepositamount.depositamountinPKR;
        console.log("Total Amount After deposit in your Account", AccountBalanace);
    }
    else if (choose.selecttransaction === "Account Information") {
        console.log("ACCOUNT TITLE : MOHAMMAD MUSTAFAIN");
        console.log("ACCOUNT NO : 11360095003762786");
        console.log("IBM NO : PK 98 BAHL 11360095003762786");
    }
}
else {
    console.log("Invalid Pin , Please try Again later");
}