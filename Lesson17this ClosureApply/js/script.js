//return name
function getName() {
    function putName() {
        var name = prompt("Your name");
        return name;
    }
    return putName();
}
alert("Your name " + getName());

//calculator sum , mul
var calculator = {
    num1: 5,
    num2: 6,
};
function sum(num1, num2) {
    return this[num1] + this[num2]
}
function mul(num1, num2) {
    return this[num1] * this[num2]
}
console.log(sum.call(calculator, 'num1', 'num2'));
console.log(mul.call(calculator, 'num1', 'num2'));

//calculator designer
function calculator2(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.sum = function() {
        return this.num1 + this.num2;
    };
    this.mul = function() {
        return this.num1 * this.num2;
    };
}
var calculator2 = new calculator2(2, 3);
console.log("sum =" + calculator2.sum());
console.log("mul =" + calculator2.mul());