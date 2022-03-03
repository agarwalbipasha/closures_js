function counterFactory(number) {
  return (result = {
    increment() {
      return number + 1;
    },
    decrement() {
      return number - 1;
    },
  });
}
module.exports = counterFactory;
