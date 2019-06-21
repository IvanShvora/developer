// //if..else which takes value promt
  var a = prompt('');
  if (a>0) {
      console.log("1");
      } 
      else if (a<0){
          console.log("-1");
      }
      else if (a==0){
     console.log("0");
     }
      else {
         console.log("NuN")
     }
      var b = -2;
      var n;
     if(b > 0) { n = true; }
     else { n=false; }
      console.log(n);
    
 // switch conditions
 var a=1;
 switch (a) {
 case 1:
 console.log ('a');
 break;
 case 2: 
 console.log ('b');
 break;
 case 3: 
 console.log ('c');
 break;
 default:
 console.log ('z');
 }

//squares of numbers from 1 to 9
for (var i=1; i<10; i++){
    console.log(i*i);
}

//squares of numbers from 1 to 9
var i=1;
while(i<10){
console.log(i*i);
i++;
}

//return more number
function getBigNumber(a, b) {
    if (a > b) {
        return a + " " + "number is bigger";
    } else if (a < b) {
        return b + '' + "number is bigger";
    } else if (a==b){
        return a + "" + "a=b";
    }
    else {
        return "NaN";
    }
}
console.log(getBigNumber(5, 3));