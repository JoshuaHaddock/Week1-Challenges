// ARRAYS

// putting [] after "favSongs" allows you to pick a certain song. E.g. 0-2 - 0=Shyloom, 1=Tin and 2=Inzo
// favSongs[] = "New - Song" allows you to re-assign
// putting .length after the favSongs, then shows the amount of songs are in the array (which would be 3 in this case)
// .push() = adds an item into the array
// .pop() = removes the last item in the array

// let favSongs = [
//     "Shyloom MeHylo - Into My Hands",
//     "Tin - Ticking",
//     "Inzo - Overthinker"
// ]

// favSongs[1] = "Black sabbath - iron man"
// console.log(favSongs)

// favSongs.push("Elley Duhé - Middle of the Night")
// favSongs.pop()
// console.log(favSongs)




// Map() Method
// let nums = [1, 2, 3, 4, 5]
// let result = nums.map((num) => num * 2)
// console.log(result)


// Shift() Removes the first item in the array
// let fruits = [
//     "Orange",
//     "Apple", 
//     "Banana", 
//     "Mango"
// ]
// fruits.shift()
// console.log(fruits)


// unshift() allows you to add new items at the beginning of an array
// let fruits = [
//     "Orange",
//     "Apple", 
//     "Banana", 
//     "Mango"
// ]
// fruits.unshift("Lemon", "Pineapple")
// console.log(fruits)


// splice() allows you to add array elements
// let fruits = [
//      "Orange",
//      "Apple", 
//      "Banana", 
//      "Mango"
// ]
// fruits.splice(1, 0, "Lemon", "Pineapple")
// console.log(fruits)


// slice() returns selected elements as a new array < not working correctly
// let fruits = [
//     "Orange",
//     "Apple", 
//     "Banana", 
//     "Mango",
//     "Lemon"
// ]
// let citrus = fruits.slice(-1, -3)
// console.log(fruits)


// LOOPS < FOR loops run for a limited amount of times.

// let favMovies = [
//     "John Wick",
//     "Scream",
//     "Predator"
// ]
// for (let i = 0; i < favMovies.length; i++){
//     console.log(favMovies[i], "i value =", i)
// }


// .ceil = round number up. 1st = 1 way. 2nd = array (2nd way)

// for (let i = 0; i < 6; i++){
//     console.log(Math.ceil(Math.random() * 50))
// }

// let nums = []
// for (let i = 0; i < 6; i++){
//     nums.push(Math.ceil(Math.random() * 50))
// }
// console.log(nums)


// let divisibleByTwo = []
// for (let i = 0; i < 20; i++){
//     if(i % 2 === 0){
//     divisibleByTwo.push(i)
//     }
// }
// console.log(divisibleByTwo)


// WHILE LOOP < Until condition is met
// Carries on running until condition is met. In this case the "age++" will add 1 until it becomes true.
// let age = 15
// while (age < 18){
//     console.log(`You're a child, you are ${age}`)
//     age++
// }
// console.log("You're an adult.")


// let cards = ["spade", "heart", "clubs", "diamond"]
// let currentCard = "clubs"

// while (currentCard !== "spade"){
//     console.log(`card selected ${currentCard}`)
//     currentCard = cards[Math.floor(Math.random() * 4)]
// }
// console.log(`card selected ${currentCard}`)


// ARRAYS AND LOOPS ACTIVITY 1 - WEDNESDAY 19TH APRIL 2023 < Completed
// let favMovies = [
//     "IT",
//     "IT 2",
//     "Scream",
//     "Predator",
//     "Paranormal Activity"
// ] 
// let currentMovie = "Scream"
// favMovies.push("Resident Evil", "Resident Evil - Extinction")

// while (currentMovie !== "IT"){
//     console.log(`The current movie is ${currentMovie}`)
//     currentMovie = favMovies[Math.floor(Math.random()*4)]
// }
// console.log(currentMovie)

// ARRAYS AND LOOPS ACTIVITY 2 - WEDNESDAY 19TH APRIL 2023
// let num1 = Math.floor(Math.random()*50)
// let num2 = Math.floor(Math.random()*50)
// let num3 = Math.floor(Math.random()*50)
// let num4 = Math.floor(Math.random()*50)
// let num5 = Math.floor(Math.random()*50)
// let num6 = Math.floor(Math.random()*50)
// console.log(num1, num2, num3, num4, num5 ,num6)

// ARRAYS AND LOOPS ACTIVITY 3 - WEDNESDAY 19TH APRIL 2023 < Not Completed


// ARRAYS AND LOOPS ACTIVITY 4 - WEDNESDAY 19TH APRIL 2023
// let films = ["Scream", "IT", "Ghostbusters", "IT2"]
// let curMovie = "IT"

// while (curMovie !== "Ghostbusters"){
//     console.log(`The current movie is ${curMovie}`)
//     curMovie = films[Math.floor(Math.random() * 4)]
// }
// if (curMovie == ("Ghostbuster")){
//     console.log ("Yay it's Ghostbusters")
// } else {
//     console.log("Boo! We want Ghostbusters!")
// }
// console.log(curMovie)


// ARRAYS AND LOOPS ACTIVITY 5 - WEDNESDAY 19TH APRIL 2023


// ARRAYS AND LOOPS ACTIVITY 6 - WEDNESDAY 19TH APRIL 2023


// ARRAYS AND LOOPS ACTIVITY 7 - WEDNESDAY 19TH APRIL 2023

