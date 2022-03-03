function limitFunctionCallCount(cb, n) {
  for (let num = 1; num <= n; num++) {
    // console.log(num);
    cb();
  }
  return null;
}
module.exports = { limitFunctionCallCount };
