//logical operators
var a = 5;
var b = 3;

if (a > b && a === b) {
    console.log( true);
} else {
    console.log(false);
}

if (true && 0 && "a" < "Z") {
    console.log(true);
} else {
    console.log(false);
}

if (a > b || true || "2" == 2 || false == "") {
    console.log(true);
} else {
    console.log(false);
}

if (a < b && 0 == false) {
    console.log(true);
} else {
    console.log(false);
}