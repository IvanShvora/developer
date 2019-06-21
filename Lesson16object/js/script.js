//and return the term "html - 5"
var skill = {
    name: "html",
    level: 5,
    fullName: function() {
        return this.name + " - " + this.level;
    }
};
console.log(skill.fullName());


// first and last letter is large 
var String = function(name) {
    this.name = name
};
String.prototype.Upper = function() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1, this.name.length - 1) + this.name.charAt(this.name.length - 1).toUpperCase();
}
var me = new String('loremipsom' );
console.log(me.Upper());


// Calculator +*value
var calc = {
    num1: 5,
    num2: 65
};
function sum(num1, num2) {
    return this[num1] + this[num2]
}
function mul(num1, num2) {
    return this[num1] * this[num2]
}
console.log(sum.call(calc, 'num1', 'num2'));
console.log(mul.call(calc, 'num1', 'num2'));