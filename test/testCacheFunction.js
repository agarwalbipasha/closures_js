const cacheFunc = require("../cacheFunction");

function testing() {
    console.log("invoking cb");
}
console.log(cacheFunc.cacheFunction(testing));