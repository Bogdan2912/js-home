//Задание 56
function welcomeToBooleans() {
    return true; 
}
console.log(welcomeToBooleans(true))

//Задание 57
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
      return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

//Задание 58
function testEqual(val) {
    if (val == 12) {
      return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

//Задание 59
function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
console.log(testStrict(10));

//Задание 60
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

//Задание 61
function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
}
  
console.log(testNotEqual(10));

//Задание 62
function testStrictNotEqual(val) {
    if (val !== 17) {
      return "Not Equal";
    }
    return "Equal";
}
  
console.log(testStrictNotEqual(10));

//Задание 63
function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    } 
  
    if (val > 10) {  
      return "Over 10";
    }
  
    return "10 or Under";
}
  
console.log(testGreaterThan(10));

//Задание 64
function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
}
  
console.log(testGreaterOrEqual(10));

//Задание 65
function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
console.log(testLessThan(10));

//Задание 66
function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) { 
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
}
  
console.log(testLessOrEqual(10));

//Задание 67
function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    return "No";
}
  
console.log(testLogicalAnd(10));

//Задание 68
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }

    return "Inside";
}

console.log(testLogicalOr(15));

//Задание 69
function testElse(val) {
    let result = "";

    if (val > 5) {
      result = "Bigger than 5";
    }else {
      result = "5 or Smaller";
    }
  
    return result;
}
  
console.log(testElse(4));

//Задание 70
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5) {
      return "Smaller than 5";
    }else{
      return "Between 5 and 10";
    }
}
  
console.log(testElseIf(7));

//Задание 71
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
}
  
console.log(orderMyLogic(7));

//Задание 72
function testSize(num) {
   if(num < 5) {
     return "Tiny"
   } else if ( num < 10) {
     return "Small"
   } else if ( num < 15) {
     return "Medium"
   } else if ( num < 20) {
     return "Large"
   } else if (num >= 20) {
     return "Huge"
   }else{
      return "Change Me";
   }
}
  
console.log(testSize(7));

//Задание 73
let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes === 1){
    return names[0];
  } else if (strokes <= par - 2){
    return names[1];
  } else if (strokes <= par - 1){
    return names[2];
  } else if ( strokes == par ){
    return names[3];
  } else if (strokes <= par + 1){
    return names[4];
  } else if (strokes <= par + 2){
    return names[5];
  }else{
    return names[6];
  }
}

console.log(golfScore(2, 4));

//Задание 74
function caseInSwitch(val) {
  let answer = "";
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(4));

//Задание 75
function switchOfStuff(val) {
  let answer = "";

  switch (val){
    case ("a"):
      answer = "apple";
      break;
    case ("b"):
      answer = "bird";
      break;
    case ("c"):
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

console.log(switchOfStuff("b"));

//Задание 76
function sequentialSizes(val) {
  let answer = "";
  switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break; 
  }

  return answer;
}

console.log(sequentialSizes(7));

//Задание 77
function chainToSwitch(val) {
  let answer = "";

  switch(val){
    case ("bob"):
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}

console.log(chainToSwitch(7));

//Задание 78
function isLess(a, b) {
 return a < b;
}

console.log(isLess(10, 15));

//Задание 79

function abTest(a, b) {
  if (a < 0 || b < 0){
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));

//Задание 80
let count = 0;

function cc(card) {
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }

  if (count > 0){
    return count + " Bet";
  }else{
    return count + " Hold";
  } 
}

console.log((cc(2)) ,(cc(3)) ,(cc(10)) ,(cc('K')) ,(cc('A')))

//Задание 81
let myDog = {
    "name": "Bobik",
    "legs": 2,
    "tails": 3,
    "friends": ["Bob","Jack"]
  };
console.log(myDog);

//Задание 82
let testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

let hatValue = testObj.hat;      
let shirtValue = testObj.shirt;  

console.log(hatValue);
console.log(shirtValue);

//Задание 83
let testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

let entreeValue = testObj1["an entree"];   
let drinkValue = testObj1["the drink"];    

console.log(entreeValue);
console.log(drinkValue);

//Задание 84
let testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

let playerNumber = 16;       
let player = testObj2[playerNumber];  

console.log(playerNumber);
console.log(player);

//Задание 85
let myDog1 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog1.name = "Happy Coder"
console.log(myDog1.name);

//Задание 86
let myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog2.bark = "bow-wow";
console.log(myDog2.bark);

//Задание 87
let myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog3.tails
console.log(myDog3);

//Задание 88
function phoneticLookup(val) {
  let result = "";

  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];

  return result;
}

console.log(phoneticLookup("charlie"));

//Задание 89
function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
let obj = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
}

console.log(checkObj(obj, "alpha"))

//Задание 90
let myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
    {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

console.log(myMusic)

//Задание 91
let myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

let gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Задание 92
let myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

let secondTree = myPlants[1].list[1];
console.log(secondTree);

//Задание 93
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

//Задание 94
var myArray5 = [];
var i = 5;
while(i >= 0){
  myArray5.push(i);
  i--;
}

console.log(myArray5)

//Задание 95
var myArray1 = [];
for(let i = 1;i < 6; i++){
  myArray1.push(i);
}

console.log(myArray1)