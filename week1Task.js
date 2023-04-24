// 1. Create an array that contains 5 of your favourite drinks. Using one method, remove the items in position 1 and 2.
// let favDrinks = [
//     "DrPepper",
//     "Fanta",
//     "Tea",
//     "Coffee",
//     "Monster"
// ]
// console.log(favDrinks.splice(2, 4))

// 2. Use the Math library to create a random integer between 1 and 80
// let num1 = Math.ceil(Math.random()* 80 + 0) 
// console.log(num1)

//3. Create a dice roll program, generate a random number between 1 and 6 and depending on the outcome, log in the terminal the number ‘rolled’ (eg “you rolled a 4”)
// let dice1 = Math.ceil(Math.random() * 6 + 0)
// if (dice1 == 1) {
//     console.log(`You rolled ${dice1}`)
// } else {
//     console.log(`You rolled ${dice1}`)
// }

// 4. Create a variable called password, have a checker in place to make sure the length of the password is 6 letters or more. If the password is less than 6 letters, 
//    log “password too short”.If the password is 6 or more, display the length followed by a thank you message.
// let password = "GearsOfWar"
// let length = password.length
// if (length < 6 ) {
//     console.log("You're password is too short");
// } else{
//     console.log(`You're password is ${length} characters long. Thank you!`)
// }

// 5. Have two variables called ‘bool1’ and ‘bool2’ and assign them both Boolean values (true or false). Log to the console true, if exactly one of the values are true. 
//    Otherwise log false
// let bool1 = true
// let bool2 = false
// let num1 = 3
// let num2 = 5
// if (num1 > num2) {
//     console.log (bool1)
// } else {
//     console.log(bool2)
// }

// 6. Create a variable called num. If the number is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console. If its divisible by both 3 and 5 
//    log “fizz buzz” to theconsole. Otherwise log num to the console.
// let num = 5
// if (num % 3 === 0 && num % 5 === 0){
//    console.log("fizz buzz")
// } else if (num % 3 === 0) {
//     console.log("fizz")
// } else if (num % 5 === 0){
//     console.log("buzz")
// } else {
//     console.log(num)
// }

// 7. Create 2 variables, assign a number to one (between 1 – 10) and generate a random number to the other variable (between 1 – 10). 
// Create a loop that checks if the number assigned and the generated number are the same, if they are not log to the console “not the same” followed by the randomly generate number, 
// then generate another random number to try again. When they match, log to the console how many loop cycles it went through to match the two numbers.
// let num1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
// let num2 = Math.ceil(Math.random() * 10)
// while (num2 !== "5"){
//     console.log(`Random Number is  ${num2}`)
//     num2 = num1[Math.floor(Math.random() * 10)]
//     console.count(`Loops Taken`)
// }
// console.log(`They Match!`)



