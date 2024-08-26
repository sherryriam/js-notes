//with var keyword you can reassign a variable
// var can be used throughout the whole program
var name = "Miriam";
name = 33
document.getElementById("demo").innerHTML = name

// let is only used within the scope of where you declaired it
let word = "come on";
word = "no please"
console.log(word)
document.getElementById("word").innerHTML = word;

//const is a constant keyword it can never be reassigned
//there will be an error if you try to change the value of const keyword
const amount = 3000
document.getElementById("amount").innerHTML = amount
const data = 300;
console.log(data)
// you end all line with a semicolon in javascript

var a;
var b =2;

a = 4
console.log(a)
document.getElementById("variables").innerHTML = b

//javascript is case sensitive
// javascript uses camel case

console.log("I'm javascript")
var a = 5;
var b =10;
var c = "I am a ";

a = a + 1;
//a++
b = b + 10;
//b +=10;
c = c + "string";
//c += "string"

var a = 5;
var b = 10;

a = a - 3;
//a -= 3
//b -= 6
//b = b - 6
b = 20 - b
//b -= 20

console.log(a,b, "i love you")

console.log(a, b, c)
console.log(b)
console.log(a)

a ++

//adding number
//adding and subtracting two numbers is pretty straight forward;
var sum = 10 + 0
console.log(sum)
 //subtracting numbers

var difference = 40 - 5;
console.log(difference);
let myname = "Karen Murugi";

document.getElementById("name").innerHTML = myname

//dividing number in js

var quotient = 40 / 2;
console.log(quotient);

//multiplying numbers

var increase = 40 * 2;

console.log(increase);

// incrementing a number

var mynum = 11;
//myvar = myvar + 1
mynum++
console.log(mynum)

//decrementing a number

var myVar = 11;
//myVar = myVar - 1
myVar --
console.log(myVar)

//decimal point numbers in js;

//multiplying decimal point numbers
//var ourDecimal = 5.7;

var product = 2.0 * 3.5
console.log(product)

// dividing decimal point

var quotient = 4.0 / 2.0
console.log(quotient);

//remainder
//we use the modulas operator;

var remainder = 10 % 7
console.log(remainder);

//strings

var myFirstName = "Miriam";
var myLastName = "Gacheri";

console.log(myFirstName, myLastName)
//Escaping Literal quotes in strings;
//if you escape a string it will no longer be considered as the end of a string;
//var myStr = "I am a" double quoted" string inside " double quotes"";
//use back ticks(button in you upper right side of your keyboard.) to escape literal quotes in strings;

var myStr = `I am a "double quoted" string inside "double quotes"`

// use backslash (\) to escape literal quotes;

var myStri = "I am a \"double quoted\" string inside \"double quotes\"";

console.log(myStr)
console.log(myStri)

//use single quotes to escape string quotes literal
var myString = 'I am a "double quoted" string inside "double quotes"'
console.log(myString)

var myString = "I am a 'double quoted' string inside 'double quotes'"
console.log(myString);

//escaping sequences in strings;

/*  
 \'    single quote
 \"    double quotes;
 \\    backslash;
 \n    newline
 \r    carriage return
 \t    tab
 \b   backspace
 \f    form feed

 */

var myStrings = "Firstline\n\t\\Secondline\n\tThirdline"
console.log(myStrings)
//string concatenating with plus operator; 

var ourStr = "I come first. " + "I come second.";
console.log(ourStr)

//concatenating strings with plus equals operator;

var yourStr = "I love Githeri. "
yourStr += "It's my favourite dish";

console.log(yourStr)

//concatenating strings together with variables

var ourName = "Mir online schools";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr)

//appending variables to string;
var anAdjective = "awesome!";
var ourStr = "Mir online school is ";
 ourStr += anAdjective;
console.log(ourStr);

//find length of a string
//length counts even spaces in a sentence.
var str = "Iovelace ";
str= str.length;
console.log(str)

//bracket notation to find the first character in string;
//strings are 0 indexed
//they start at the index of 0
var firstName = "Miriam";
var firstLetter = " ";

firstLetter = firstName[firstName.length - 1]
console.log(firstLetter)
//functions in js
var results= " ";
function myFunction( myNoun, myAdjective, myVerb, myAdverb){
    let name = "miriam";
    results = name + " has a " + myAdjective + " " + myNoun + " that " + myVerb + " to the store " + myAdverb;
    return results
}
console.log(myFunction('dog', 'big', 'ran', 'quickly'))

//arrays in js
const array = ["Miriam", 29 ]
 console.log(array)

 //access array using bracket notation
 const person = ["Mary", 30, "lives in Nairobi town"]

 console.log(person[2])

 //nested arrays
 //array within an array
 //multidimensional array

 const persons = [["Ann", 28], ["Luna", 3], ["cooper", 5], ["home", "kabachi", ["home", "mutuati"]]]


console.log(persons[3][2][1])
//modify an array

var  yourArray = [20, 60, 40]
yourArray[1] = 30;
var myArray = yourArray;
console.log(myArray)
//the result = [20, 30, 40];

//.push() method in arrays;
//adds an item at the end of an array


var ourArray = ["Miriam", "Cooper", "Luna"]
ourArray.push("Dina", "Gacheri")
//results
//ourArray = ["Miriam", "Cooper", "Luna", "Dina", "Gacheri"]
console.log(ourArray)

var ourArray = ["Miriam", "Cooper", "Luna"]
ourArray.push(["Dina", "Gacheri"])
console.log(ourArray)
//results
//ourArray = ["Miriam", "Cooper", "Luna", ["Dina", "Gacheri"]];


//Manupulating an array with pop() method;
//removes the last item of an array

var ourArray = [["John", 23], ["cat", 2]];
console.log(ourArray)
var removedFromOurArray = ourArray.pop();

console.log(ourArray)

//manipulating arrays with shift() method
//removes an the first item of an array

var ourArray = ["Miriam", 30, ["cat", 2]];
var removedFromOurArray = ourArray.shift()
//ourArray = [30, ["cat", 2]];
//removedFromOurArray = "Miriam"
console.log(ourArray)
console.log(removedFromOurArray)
document.getElementById("removed").innerHTML = removedFromOurArray


//manipulating array data with unshift()
//add an item in the begining of an array

var ourArray = ["Gacheri", "Mugambi", "Katharimi"]
ourArray.unshift("Joy");
console.log(ourArray)

//create reusable functions in js

function ourReusableFunction(){
    console.log("Hello, World")
}
ourReusableFunction()
ourReusableFunction()
ourReusableFunction()
//Hello, World will appear as many times as you call the function;

//passing values(parameters) to functions with arguments

//parameters are variables that act as placeholders for the values that  are to be input in functions when called;

function ourFunctionWithArgs(a, b){
    var results = " ";
    results = a * b;
    //return results;
    document.getElementById("removed").innerHTML = results

}
ourFunctionWithArgs(5, 5)


//global scope and functions
//variables declared outside a function ara called global scope variables
//they can be accessed anywhere within the code
//a variable declared locally within a function without a (var, let, const) keyword will also be declared globally within the code

var myGlobal = "i am a global scope"

function fun1(){
    var oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal:  " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }

    console.log(output)
}

fun1()
fun2()
//local scope variables 
//they are only visible within a function;
//variables declared locally within(inside) a function;
/*in the above function var oopsGlobal will only be accessed by fun1. It can never be accessed by fun2 because it is declared inside fun1 . 
However if you forgot to use the (var,let,const) keyword, it will be used anywhere in your code.*/

//variables declaired outside a function are global scope variable
//they can be accessed through out the document's code. e.g the myGlobal variable

var outerWear = "T-shirt";

function myOutfits(){

    return outerWear;
}
console.log(myOutfits())

//results will be T-shirt

//the function will use the variable declared outside this function ;
//but if you declare another variable inside that function, the local variable will take presidence over the global varial
//e.g below
//results will be Sweater

var outerWear = "T-shirt";

function myOutfit(){

    var outerWear = "Sweater"

    return outerWear;
}
console.log(myOutfit())

//return a value from a function with a (return keyword)

function minusSeven(num){
    return num - 7
}
console.log(minusSeven(10))

function timesFive(num){
    return num * 5
}
console.log(timesFive(5))

//understanding undefined value returned from a function
//it will not add three to sum since we are not returning anything
//without the return keyword you will get the undefined.

var sum = 5
function addThree() {
    sum = sum + 3

}
console.log(addThree(3))

//use the return keyword to get the result of sum + 3

function addThrees(sum) {
    
    return sum + 3                      ;
}
console.log(addThrees(5))


//assigning with a returned value

var changed = 0;
function change(num){
    return (num +5) /3
}

changed = change(10)

console.log(changed)

//example 2

var processed = 0;

function processedArg(num){
    return (num + 3) /  5
}

processed = processedArg(12)

console.log(processed)

//stand in line 
//in computer science a quee is where data are kept in order
//you can add an item before or after the data that is in quee

function nextInLine(arr,  item){
    arr.push(item);
    
    //arr.unshift(7)
    return arr.shift()
}
var testArr = [1,2,3,4,5];

console.log("before:  " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After:  " + JSON.stringify(testArr))

//boolean values

function welcomeToBooleans(isItTrue){
    if (isItTrue){
      return "Yes, it's true"
    }
    return "No, it's false"
}

console.log(welcomeToBooleans(false))

function  trueOrFalse(wasThatTrue) {

    if (wasThatTrue) {
        return "Yes, that was true"
    }

       return "No, that was false"
}

console.log(trueOrFalse(true))

//comparison with the equality operator
//== equality operator
//it converts a string to a number
//it does type conversion

function testEqual(val) {
    if (val == 10){
        return "Equal"
    }
    return "Not equal"
}
console.log(testEqual("10"))

//=== equality operator
//strict operator
//10 is not equal to "10", one is a string and the othe is a number
//=== does not convert strings to a number;
//does not do type conversion
function testStrictEqual(val) {
    if (val === 10){
        return "Equal"
    }
    return "Not equal"
}
console.log(testStrictEqual("10"))


//comparison with the inequality operator
// != inequality operator
function testNotEqual(val) {
    if (val != 10){
         return "Not equal"

    }
        
        return "Equal"
    }
    

console.log(testNotEqual("10"))


//comparison with strict inequality operator
//!== strict inequality operator;

function testStrictNotEqual(val) {
    if (val !== 10){
         return "Not equal"
    }
        return "Equal"
    }

console.log(testStrictNotEqual("10"))

//comparison with greater than logical operator
function testGreaterThan(val) {
    if (val > 100){
        return "over 100"
    }
    if (val > 10) {
        return "over 10"
    }
    return "10 or under"
}
console.log(testGreaterThan(12))

//greater than or equal;

function testGreaterOrEqual(val){

    if(val >= 20) {
        return "20 or over"
    }

    if (val >= 10) {
        return "10 or  over"
    }
    return "Less that 10"

}
console.log(testGreaterOrEqual(8))

//comparison with less than logical operator
function testLessThan(val) {
    if (val < 100){
        return "under 100"
    }
    if (val < 10) {
        return "under 10"
    }
    return "over 100"
}
console.log(testLessThan(12))

//less than or equal to

function testLessOrEqual(val){

    if (val <= 10) {
        return "10 or  less"
    }
    if(val <= 20) {
        return "20 or over"
    }
    return "greater than 100"

}
console.log(testLessOrEqual(5))



//use if/else if and else statement if you have multiple conditions.

//if you write your if statement without order you will get the wrong results
function testLessOrEqual(val){

    if (val <= 10) {
        return "10 or  less"
    }
    else if (val <= 20) {
        return "20 or over"
    } else {
    return"greater than 100"
    }
}
console.log(testLessOrEqual(101))

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20){
        return "Large"
    } else {
        return "Huge"
    }
}
console.log(testSize(15))

//golf code

var names = ["Hole-in-one", "Eagle", "Birdie", "parr", "borgey", "double borgey", "go home"];
function golfScore(par, strokes){
    
    if (strokes ===1) {
        return "    Hole-in-one!";
    } else if(strokes <= (par - 2)){ 
        return "Eagle"
    }  else if (strokes === (par - 1)) {
        return "birdie"
    } else if (strokes === par){
        return "parr"
    } else if ( par + 1){
        return "Borgey"
    } else if(strokes === (par + 2)){
        return "double borgey"
    } else {
        return "Go home"
    }
}

console.log(golfScore(5, 4))


//switch statement

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha"
            break;
        case 2: 
             answer = "beta"
             break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    } 
    return answer
}
console.log(caseInSwitch(3))

//default option in switch statement
//it acts like else in if statement
//if all conditions are false, the default value is returned

function caseInSwitch2(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha"
            break;
        case 2: 
             answer = "beta"
             break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
        default: answer = "Not Available"
    } 
    return answer
}
console.log(caseInSwitch2(6))

function caseInSwitch2(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "alpha"
            break;
        case "b": 
             answer = "bird"
             break;
        case "c":
            answer = "cat"
            break;
        case "d":
            answer = "delta"
            break;
        default: 
        answer = "Not Available"
        break;
    } 
    return answer
}
console.log(caseInSwitch2("b"))

//multiple identical condition in switch statement

function MultipleCaseInSwitch2(val){
    var answer = "";
    switch(val){
        case 1:
        case 2: 
        case 3:
            answer = "High"
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            answer = "Medium"
            break;
        case 8:
        case 9:
        case 10:
            answer  = "low" 
            break;
        default: 
            answer = "Refer required"
            break;
    } 
    return answer
}
console.log(MultipleCaseInSwitch2(10))

// returning boolean values in a function

function isLess(a, b){
        return a < b
}

console.log(isLess(40, 20))

//returning early pattern from function

//sijailewa vizuri

function abTest(a, b) {
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),  2))
}
console.log(abTest(4, 4))

// counting cards

var count = 0;

function cc(card) {
    
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++
            break;
        case 10:
        case  "J":
        case "q":
        case "K":
        case "A":
            count --;
            break;

    }

    var holdbet = "hold"

    if (count > 0){
        holdbet = "bet"
    }
    return count + " " + holdbet;
}

cc(2); cc(3); cc("J"); cc('K'), cc('A');
console.log(cc(4));

//build javascript objects
//you use properties to access object
//properties are anything before the colon and the value is anything after the colon;
// use dot notation '.' or bracket notation '[]';


var ourDog = {
    "name": "camper",
    "legs":  4,
    "tails": 1,
    "friends": ["everything",]
};
console.log(ourDog.legs)
console.log(ourDog["tails"])
//bracket notation is required if the property has a space between it

var ourDog = {
    "my name": "camper",
    "legs":  4,
    "tails": 1,
    "friends": ["everything",]
};
console.log(ourDog["my name"])


// if you use a dot notation on a property that has space in it, there will be an error;
/*var ourDog = {
    "my name": "camper",
    "legs":  4,
    "tails": 1,
    "friends": ["everything",]
};
console.log(ourDog.my name)*/

//updating object properties;

var ourDog = {
    "my name": "camper",
    "legs":  4,
    "tails": 1,
    "friends": ["everything",]
};
ourDog["my name"] = "happy camper"
console.log(ourDog["my name"])

//accessing object properties using a variable;
//use bracket notation


var testObj = {
    12: "Nathan",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(testObj[12])
console.log(player)

//add new properties to an object;

var ourDog = {
    "my name": "camper",
    "legs":  4,
    "tails": 1,
    "friends": ["everything",]
};
ourDog.bark = "bow-wow"
console.log(ourDog.bark)

//delete properties from an object and adding properties to an object

var ourDog = {
    "my name": "camper",
    "legs":  4,
    "tails": 1,
    "friends": ["everything",]
};
console.log(ourDog.tails)
delete ourDog.tails
ourDog.bark = "woofs"
console.log(ourDog)

//using objects for lookups
//change this switch statement to an object for lookups

function caseInSwitch2(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "alpha"
            break;
        case "b": 
             answer = "bird"
             break;
        case "c":
            answer = "cat"
            break;
        case "d":
            answer = "delta"
            break;
        default: 
        answer = "Not Available"
        break;
    } 
    return answer
}
console.log(caseInSwitch2("b"))

//object for lookup

function phoneticLookup(val){
    var result = ""
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "denva",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val]
    return result
     
}

console.log(phoneticLookup("delta"))

//testing objects for properties
//example 1

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj .hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "not found"
    }
}
console.log(checkObj("gift"))

//example 2

var personInf = {
    name: "Miriam",
    phone: "0743345306",
    country: "Kenya",
    age: 29
}

function checkObject (checkProp){
    if (personInf.hasOwnProperty(checkProp)) {
        return personInf[checkProp];

    } else {
        return "Not found"
    }
}
console.log(checkObject("phone"))

//manipulating complex objects
//a javascript object is a way to store flexible data
//it can store strings, numbers and also an array of data and even other objects

var myMusic = [
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
        artist : "Miriiam",
        "title": "Coming home soon",
        "release_year": 2014,
        "formats": [
            "YouTube",
            "Tubidy"
        ],
        "gold": false

    }
]

console.log(myMusic[0]["artist"])
console.log(myMusic[0].gold)
console.log(myMusic[0]["formats"][2])
//access the second object
console.log(myMusic[1]["artist"])
console.log(myMusic[1]["release_year"])
console.log(myMusic[1].gold)
/*JavaScript Display Possibilities
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into an alert box, using alert().
Writing into the browser console, using console.log(). */


let question = "Are you okey?"
//alert(question);


//accessing nested objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs" 
        },
        "outside": {
            "trunk": "jack"
        }
    }
}
var gloveBoxContent = myStorage.car.inside["glove box"]
console.log(gloveBoxContent)
document.getElementById("forloop").innerHTML = "My glove box: " + myStorage.car.inside["glove box"];

var trunkContent = myStorage["car"]["outside"]["trunk"]
console.log(trunkContent)
var trunksContent = myStorage.car.outside.trunk
console.log(trunksContent)

// Updating nested arrays.


var collection = {
    "2548": {
        "albam": "slipery when wet",
        "artist": "Miriam Gacheri",
        "tracks": [
            "Let it rock",
            "You Give Love a Bad name"
        ]
    },
    "2460": {
        "album": "1999",
        "artist" : " ",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439" : {
        "album": "ABBA Gold"
    }
};



var collectionCopy = JSON.parse(JSON.stringify(collection))
function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop]
    }else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [] 
        collection[id][prop].push(value)
    }else {
        collection[id][prop] = value
    }
    return collection
}
const tracksTest = updateRecords(2460, "tracks", "test" )
document.getElementById("forloop1").innerHTML = "The tracks are put on " + tracksTest[2460]["tracks"][2]
const artistName = updateRecords(5439, "artist", "ABBA" ) 
document.getElementById("forloop1").innerHTML = "The artist name is " + artistName[5439]['artist']


// For loop
var myNumbers = []
for (let i= 0; i  <= 30;  i+=6) {
    myNumbers.push(i)
}

console.log(myNumbers)

var myArray =[];
var i = 0
while(i <= 10){
    myArray.push(i);
    i++
}

console.log(myArray)