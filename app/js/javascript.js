//   document.getElementById("counter").innerHTML = 5
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);
// function increment() {

// }

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function laps() {
//   let totalTime = lap1 + lap2 + lap3;
//   console.log(totalTime);
// }
// laps()
// document.getElementById("counter").innerHTML = 5
let counterEl = document.getElementById("counter-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count +=  1;
  counterEl.textContent  = count;
  console.log(count);
}
//Create a function save(),which logs out the count when it's called
function save(){
  let savedCount = count + " - ";
  saveEl.textContent += savedCount;
  counterEl.textContent = 0;
  count = 0;
  console.log(count);
}
//strings
// let userName = "Hoss"
// let message = "You have three notifications";
// let messageToUser = message + ", " + userName + "!" ;
// console.log(messageToUser);

// let name = "Hossam!";
// let greeting = "Hey, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");

// let name = "Hoss";
// let greeting = "Welcome back to the page ";

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += "✋🏻"

// let firstName = "Hossam";
// let lastName = "Mohamed";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let fname = "Lina";
// let greeting = "Hi there";

// function greet() {
//   let myGreeting = greeting + ", " + fname + "!";
//   console.log(myGreeting);
// }
// greet();

let myPoints = 3;

function add3Points() {
  myPoints += 3;
}
add3Points();
add3Points();
add3Points();
function remove1Point() {
  myPoints -= 1;
}
remove1Point();
remove1Point(); 
console.log(myPoints);

