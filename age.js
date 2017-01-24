//1. How many hours are in a year
var hoursInYear = 24*7*52
console.log ("we have " , hoursInYear , " hours in the year")
//2. How many minutes are in a decade
var minInDecade = hoursInYear*60*10
console.log ("we have " + minInDecade + " minutes in the decade")
//3. How many seconds old they are
var year= 35
var secInAge = hoursInYear*60*60*year
console.log ("we have " + secInAge + " second in " + year +" years")
//4. If they are older than some arbitrary number, console "I'm old", else "I'm young"
if (year >80 ){
console.log ("I am old");
} else {
console.log("I am young");
}



