//add items to an array
var arr = [];
function getPushArray() {
    var f = prompt();
    if (f === null) {
        console.log(arr);
    } else {
        arr.push(f);
        getPushArray();
    }
}
getPushArray();


//the sum of elements of a two-dimensional array
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function getMatrixIndex(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var b = 0; b < matrix.length; b++) {
            sum = sum + matrix[i][b];
        }
    }
    return sum;
}
console.log(getMatrixIndex(matrix));

//words longer than 5
var longString = "Lorem ipsum dolor sit amet consectetur adipisicing elit consequuntur laboriosam nisi fuga";
var array = longString.split(' ');
console.log(array);
for (var i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
        console.log(array[i]);
    }
}

//add number 8 after 22
var numberArray = [1, 9, 22, 7, 6];
numberArray.splice(3, 0, 8);
console.log(numberArray);


//random number, check whether there is a number that is entered through prompt()
var max = 100;
function randomNumber(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push(Math.floor(Math.random() * max) + 1);
    }
    return array;
}
var arrayResult = randomNumber(10);
console.log(arrayResult);
console.log(arrayResult.indexOf(+prompt("number")));



// find the longest word
var str = "Lorem elit Consequuntur dolor sit fugaath";
var words = str.split(' ');
console.log(words);
function getLongestWord(words) {
    var longestWord = "";
    words.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}
console.log("longest word: " + getLongestWord(words));


// array squares array
var squaresNumbers = [8, 6, 12, 10];
console.log(squaresNumbers);
var square = squaresNumbers.map(function(num) {
    return num * num;
});
console.log(square);