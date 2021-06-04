//Задание 26
let myStr = 'This is the start. ' + 'This is the end.';
console.log(myStr);

//Задание 27
let myString = 'This is the first sentence. ';
myString += 'This is the second sentence.';
console.log(myString);

//Задание 28
let myName = 'Bogdan';
let myString1 = 'My name is ' + myName + ', and I am well!';
console.log(myString1);

//Задание 29
let someAdjective = " the best";
let myStr1 = "Learning to code is ";
myStr1 += someAdjective;
console.log(myStr1);

//Задание 30
let lastNameLength = 0;
let lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

//Задание 31
let firstLetterOfLastName = "";
let lastName1 = "Lovelace";

firstLetterOfLastName = lastName[0]; 
console.log(firstLetterOfLastName);

//Задание 32
let myStr2 = "Jello World";

myStr2 = "Hello World";
console.log(myStr2);

//Задание 33
let lastName2 = "Lovelace";

let thirdLetterOfLastNamee = lastName2[2]; 
console.log(thirdLetterOfLastNamee);

//Задание 34
let lastName3 = "Lovelace";


let lastLetterOfLastName1 = lastName3[lastName3.length - 1]; 
console.log(lastLetterOfLastName1);

//Задание 35
let lastName4 = "Lovelace";


let secondToLastLetterOfLastName2 = lastName4[lastName4.length - 2];
console.log(secondToLastLetterOfLastName2);

//Задание 36
let myNoun = "dog";
let myAdjective = "big";
let myVerb = "ran";
let myAdverb = "quickly";

let wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks);

//Задание 37
let myArray = ["string", 2];
console.log(myArray);

//Задание 38
let myArray1 = [["Bulls", 23], ["White Sox", 45]];
console.log(myArray1);

//Задание 39
let myArray2 = [50,60,70];
let myData = myArray2[0];
console.log(myData);


//Задание 40
let myArray3 = [18,64,99];
myArray3[0] = 45;
console.log(myArray3)

//Задание 41
let myArray4 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

let myData1 = myArray4[2][1];
console.log(myData1);

//Задание 42
let myArray5 = [["John", 23], ["cat", 2]];
myArray5.push(["dog", 3]);
console.log(myArray5);

//Задание 43
let myArray6 = [["John", 23], ["cat", 2]];

let removedFromMyArray = myArray6.pop();
console.log(removedFromMyArray);
console.log(myArray6);
//Задание 44
let myArray7 = [["John", 23], ["dog", 3]];

let removedFromMyArray1 = myArray7.shift();
console.log(removedFromMyArray1);
console.log(myArray7);

//Задание 45
let myArray8 = [["John", 23], ["dog", 3]];
myArray8.shift();
myArray8.unshift(["Paul",35]);
console.log(myArray8);

//Задание 46
let myList = [["fruit", 25], ["pasta", 30], ["buckwheat", 60], ["sugar", 50], ["flour", 40]];
console.log(myList);

//Задание 47
function reusableFunction() {
    console.log("Hi World");
}
  
reusableFunction();
  
  
//Задание 48
function functionWithArgs(a,b) {
    console.log(a + b);
}
functionWithArgs(1,2)
functionWithArgs(7,9)
//Задание 49
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}
console.log(myGlobal);
//Задание 50
function myLocalScope() {

    // Only change code below this line
    let myVar = 5; 
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);
//Задание 51
// Setup
let outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();
console.log(outerWear);

//Задание 52
function timesFive(num){
    return num * 5
}
let answer  = timesFive (5);
console.log(answer);

//Задание 53
// Setup
let sum = 0;
function addThree() {
    return sum = sum + 3;
}

function addFive() {
    return sum = sum + 5;
}

let answer1 = addThree();
let answer2 = addFive();
console.log(answer1, answer2);
//Задание 54
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);

//Задание 55
function nextInLine(arr, item) {
    testArr.push(item);
    testArr.shift(arr[0]);
    return arr[0] || item;
    
    
  
}
  
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));