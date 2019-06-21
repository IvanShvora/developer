//even or odd number
     function checkingNumber(a){
        if (a%2==0){
        return a+ ' ' + 'Парне';
        }
        else  {return a+ " " + 'Не парне';}}
        console.log(checkingNumber(Math.floor(Math.random() * (100 - 1 + 1) ) + 1))
   
//merge into a line, every word from uppercase letter
var arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];
for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i][0].toUpperCase();
    var restLetters = arr[i].substring(1);
    arr[i] = firstLetter + restLetters;
}
console.log(arr.join(" "));

//returns a longer term
function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
      return str1 + ' ' + "bigger line";
  } else if (str1.length < str2.length) {
      return str2 + ' ' + "bigger line";
  } else {
      return "strings ==";
  }
}
console.log(compareStrings("lorem ipsum dolor sit amet", "consectetur adipiscing elit"));








    