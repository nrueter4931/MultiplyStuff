var MultiplyStuff = (function () {
    function MultiplyStuff() {
    }
    MultiplyStuff.prototype.product = function (x, y) {
        return x * y;
    };
    return MultiplyStuff;
})();
var classInstance = new MultiplyStuff();
console.log(classInstance.product(20, 30));
