var refreshCounter = (function() {
    var counter = 0;
    return function() {
        counter++;
        console.log(`Feed fetched ${counter} times`)
    };
})();

export default refreshCounter