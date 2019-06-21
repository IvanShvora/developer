//ternary operator
var a = 6;
var b = 3;
console.log("a=" + a + " b=" + b);
var c = a > b ? 'true' : 'false';
console.log('a > b ? ' + c)

a = 3;
b = 3;
console.log("a=" + a + " b=" + b);
c = a == b ? 'true' : 'false';
console.log("a == b ?" + c);

a = 3;
b = 6;
console.log("a=" + a + " b=" + b);
console.log("a!=b ?");

if (a != b) {
    console.log("true");
} else {
    console.log("false");
}

a = 1;
b = "";
c = a == b ? 'true' : 'false';
console.log("a=" + a + " b=''" + b);
console.log("a===b? " + c);

c = 'B' > 'A' ? true : false;
console.log('"B" > "A" ' + c);

c = "a" > "Z" ? true : false;
console.log('"a" > "Z"? ' + c);


a = false, b = 0, c = a >= b ? true : false;
console.log('a = false , b = 0 , c=a>=b ? ' + c);

c = ("2" === 2) ? "ok" : "not";
console.log('("2" === 2)? ' + c);