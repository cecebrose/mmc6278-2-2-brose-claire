function greet() {
let person = prompt ("What's your name?");
alert ("Hello " + person + "!");
var age = prompt("How old are you?");
let text = "Press ok for yes and cancel for no";
if (confirm("Did you have a birthday this year?") == true) {
  alert ("Happy Birthday!");
} else {
  alert ("Darn!");
}
var year_born = prompt("Please enter your birth year:", "Type here");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
alert("Hello, " + "you are " + calculatedAge + " years old!");
}



