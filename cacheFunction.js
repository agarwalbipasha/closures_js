function cacheFunction(cb) {
    cb();
    if (arguments) {
    let cache = {};
    cache.arguments = arguments;
    return cache;
    } 

}
module.exports = { cacheFunction };