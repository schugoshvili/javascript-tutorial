// function declaration and XPathExpression

console.log(addDollarSign(100));  // works

function  addDollarSign(value) {
    return '$' + value;
}




console.log(addPlusSign(200)); // won't work

const addPlusSign = function(value) {
    return '+' + value;
};

