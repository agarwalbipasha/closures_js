const limitFunction = require("../limitFunctionCallCount");

function addNumber5 (number) {
    console.log("invoking cb");
    // return number + 5;
}
console.log(limitFunction.limitFunctionCallCount(addNumber5, 5));
// console.log(typeof addNumber5(2) =='function');