


// function nuggetMaker(animal) {
// var myNugget = "braeding" + animal  + "braeding" ;
// return myNugget;
// }

// var checkenNuggets = nuggetMaker("checken");
// console.log(checkenNuggets);
// var lobsterNuggets = nuggetMaker("lobster");
// console.log(lobsterNuggets);
// var tablet = nuggetMaker("myComputer");
// console.log(tablet);


// OBJECTS

// var myCat = {
// 	tail: "long",
// 	age: 29,
// 	color: "blue",
// 	friends: ["zoe", "callan", "lauren"]
// }

// console.log("age of cat: ", myCat.age);
// console.log("color of cats: ", myCat["color"]);

// for(var myKey in myCat){
// 	console.log("myKey", myKey);
// 	console.log("values", myCat[myKey]);
// }

// FUNCTIONS

var nuggetElement = document.getElementById("nuggetShack");
console.log(nuggetElement);
var availElement = document.getElementById("availForPurchase");
console.log(availElement);


function nuggetMaker(animal) {
	var myNugget = "breading " + animal + " breading";
	return myNugget;
}

// console.log(nuggetMaker('sany'));

// function shackMaker(divLocation, typeOfNugget) {
// 	availElement.innerHTML += typeOfNugget;
// }

// var chickenNuggets = nuggetMaker("chicken222444");
// shackMaker(availElement, chickenNuggets);

// var lobsterNuggets = nuggetMaker("lobster");
// shackMaker(availElement, lobsterNuggets);

// var tablets = nuggetMaker("myComputer");
// shackMaker(availElement, tablets);

// var shackName = "Callan's Shack";
// nuggetElement.innerHTML += shackName;


function myLooper(myArray) {
	for(var i=0; i<myArray.length; i++) {
		console.log(myArray[i]);
	}
}

var animals = ["cat", "turtle", "fish", "bears", "tigers"];
var colors = ["red", "blue", "gold", "pink", "orange"];

myLooper(animals);
myLooper(colors);
 













