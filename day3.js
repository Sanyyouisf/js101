console.log ("day3.js");

//objects 
var myCat = {
tail: "long",
age: 29,
color: "blue",
friends: ["zoe" ,"Callon", "Lauren "]


}
console.log ( myCat.age);
console.log ( myCat["color"]);

for ( var myKey in myCat ){
console.log(myKey);
console.log (myCat[myKey])

}