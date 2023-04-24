// console.log("All Around the World".charAt(7).toLocaleUpperCase())

// let firstName = "Josh"
// firstName = "Arctic"
// console.log(firstName)

// const secondName = "Wolf"
// console.log(secondName)

// let num1 = 10
// let num2 = 8

// console.log(num1 % num2)

// let car = 20
// let van = 7
// let bike = car + van

// console.log(bike)


// let firstName = "Joshua"
// let favDrink = "Coffee"
// let favFood = "Chicken"

//console.log("My Favourite Drink is " + favDrink + " and my favourite food is " + favFood)
// or
//console.log("My Favourite Drink is", favDrink, "and my favourite food is", favFood)

// Template Litterals
//console.log(`Hello, my name is ${firstName}, and my favourite drink is ${favDrink}`)

// Activity 1 (18th April 2023)
// let firstName = "Josh"
// let lastName = "Haddock"
// let age = "21"
// let favColour = "Purple"
//console.log(`Hello, my name is ${firstName} ${lastName}, I am ${age} years old and my favourite colour is ${favColour}.`)

// firstName = "Bob"
// lastName = "Rock"
// age = "20"
// favColour = "Black"
// console.log(`Hi, my name is ${firstName} ${lastName}, I am ${age} years old and my prefered colour is ${favColour}.`)

// Activity 2 (18th April 2023)
// let breakfast = "Cereal"
// let lunch = "Sandwhich"
// let dinner = "Curry"
// console.log(`Today i had ${breakfast} for my breakfast, at lunch time i had a ${lunch} and for dinner I had ${dinner}.`)

// breakfast = "Toast"
// lunch = "Pasta"
// dinner = "Chicken"
// console.log(`Tommorow morning I will have ${breakfast}. Then I will have ${lunch} for lunch and I'll have ${dinner} for my dinner.`)

// Activity 3 (18th April 2023) < Works but not correct
let today = new Date()
let birthday = new Date()
birthday.setDate(0)
birthday.setMonth(12)
let time = today.getTime() - birthday.getTime()
console.log(time / (1000 * 60 * 60 * 24))


// Activity 4 (18th April 2023) Doesn't work
// console.log(`              |            |              `)
// console.log(`  ${space1}   | ${space2}  |  ${space3}   `)
// console.log(`              |            |              `)
// console.log(`------------------------------------------`)
// console.log(`              |            |              `)
// console.log(`  ${space4}   | ${space5}  |  ${space6}   `)
// console.log(`              |            |              `)
// console.log(`------------------------------------------`)
// console.log(`              |            |              `)
// console.log(`  ${space7}   | ${space8}  |  ${space9}   `)
// console.log(`              |            |              `)

// var space1 = ' '
// var space2 = 'o'
// var space3 = 'x'
// var space4 = 'o'
// var space5 = 'x'
// var space6 = 'o'
// var space7 = ' '
// var space8 = 'x'
// var space9 = 'x'



