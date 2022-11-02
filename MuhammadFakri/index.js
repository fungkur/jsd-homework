// console.log("Hello world")

// let alphabet = ["a", "b", "c"]
// console.log(alphabet[0])

// let arrayWithDataTypes = ["String", undefined, 42, true]
// console.log(arrayWithDataTypes[0])
// console.log(arrayWithDataTypes[3])

// let alpha = ["A", "B", "C"]
// console.log(alpha[0])
// console.log(alpha[1])
// console.log(alpha[2])
// console.log(alpha[3])

// const instruments = [
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];

// change "Pyrophone" to "Keyboard"
// console.log(instruments[5])
// instruments[5] = "Keyboard"
// console.log(instruments[5])
// instruments[instruments.length - 1] = "Keyboard"
// console.log(instruments[5])

// access the last element
// console.log(instruments[instruments.length - 1])

// const ordinals = [
//     "Zeroeth",
//     "First",
//     "Second",
//     "Third"
// ];
// for (let i = 0; i <= ordinals.length - 1; i += 1) {
//     console.log(ordinals[i])
// }

// const instruments = [
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];
// for (let i = 0; i <= instruments.length - 1; i += 1) {
//     console.log(instruments[i])
// }

// // push - add to the end
// // pop - remove from end
// // unshift - add to start
// // shift remove from start
// const ordinals = [
//     "First",
//     "Second",
//     "Third"
//     ];
// ordinals.push("Fourth")
// console.log(ordinals)
// ordinals.pop()
// console.log(ordinals)
// ordinals.unshift("Zeroeth")
// console.log(ordinals)
// ordinals.shift()
// console.log(ordinals)
// console.log(ordinals.indexOf("Second"))

// let myNumbers = [3, 4]
// myNumbers.push(5)
// console.log(myNumbers)
// myNumbers.unshift(2)
// console.log(myNumbers)
// myNumbers.pop()
// console.log(myNumbers)
// myNumbers.shift()
// console.log(myNumbers)
// console.log(myNumbers.indexOf(4))

// let rainbowColors = []
// rainbowColors.push("orange")
// rainbowColors.unshift("red")
// rainbowColors.push("yellow")
// rainbowColors.push("green", "blue", "indigo", "violet")
// console.log(rainbowColors.length)
// console.log(rainbowColors[1])
// console.log(rainbowColors.length - 1)
// console.log(rainbowColors.indexOf("blue"))

// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//     ]
// };

// console.log(bookSeries.author)
// console.log(bookSeries.books[4])

// let name = bookSeries.name
// let author = bookSeries.author
// let rating = bookSeries.rating

// console.log(name, rating, author)

// for (let i = 0; i <= bookSeries.books.length - 1; i += 1) {
//     console.log(bookSeries.books[i])
// }
// console.log(bookSeries.books)
// console.log(bookSeries.books[3])

// // create object
// let course = {
//     topic: "Javascript"
// }
// console.log(course)
// course.topic = "Javascript Development"
// console.log(course)

// bookSeries.rating = 10
// console.log(bookSeries.rating)
// bookSeries.rating = "10"
// console.log(bookSeries.rating)

// course.teacherName = "Avi"
// course.teachingAsst = ["Aiman", "Iman"]
// console.log(course)

// console.log(course.topic)
// console.log(course.name)

// const explorer = {
//     firstName: "Jack",
//     lastName: "Delta",
//     birth: {
//     day: 11,
//     month: 6,
//     year: 1910
//     }
// };
// console.log(explorer.firstName)
// console.log(explorer.lastName)
// console.log(explorer.birth.year)
// console.log(explorer.birth.day)

// const marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
//     ];
// for (let i = 0; i <= marxFamily.length - 1; i++) {
//     console.log(marxFamily[i].name)
// }
// for (let i = 0; i <= marxFamily.length - 1; i++) {
//     console.log("Name: " + marxFamily[i].name + " | Birth Year: " + marxFamily[i].birthYear)
// }

// // The Reading List
// // 1st
// const book = [
//     { title: "Book1", author: "Author1" , alreadyRead : true},
//     { title: "Book2", author: "Author2" , alreadyRead : false},
//     { title: "Book3", author: "Author3" , alreadyRead : true},
//     { title: "Book4", author: "Author4" , alreadyRead : false}
//     ];
// // 2nd
// for (let i = 0; i <= book.length - 1; i++) {
//     console.log("'"+ book[i].title +"', by "+ book[i].author)
// }
// // 3rd
// for (let i = 0; i <= book.length - 1; i++) {
// if (book[i].alreadyRead == true) {
//     console.log("You have already read '"+ book[i].title +"', by "+ book[i].author + ".")
// } else {
//     console.log("You still need to read '"+ book[i].title +"', by "+ book[i].author + ".")
// }
// }

// // The Recipe Card
// const recipe = {
//     title: "Ginger, Apple and Banana Smoothie",
//     serving: 2,
//     ingredients: [
//         "500ml Milk", 
//         "2/3 cups of vanilla protein powder", 
//         "2 tbs rolled oats",
//         "Pinch of cinnamon",
//         "2 cups of baby spinach leaves",
//         "2 frozen bananas",
//         "2 roughly chopped apples",
//         "1/2 avocado",
//         "2 tsp fresh ginger",
//         "6 ice cubes"
//     ]
// }
// console.log(recipe.title)
// console.log("Serves: " + recipe.serving)
// console.log("Ingredients: ")
// for (let i = 0; i <= recipe.ingredients.length - 1; i++) {
//     console.log("- " + recipe.ingredients[i])
// }

// The Movie Database
const movie = {
    title: "The Life Aquatic",
    duration: 118,
    director: "Wes Anderson",
    stars: [
        "Bill Murray",
        "Cate Blanchett",
        "Anjelica Huston",
        "Jeff Goldblum",
        "Willem Dafoe"
    ]
}
console.log("'" + movie.title + "' lasts for " + movie.duration + " minutes, and was directed by " + movie.director + ".")
console.log("Stars: " + movie.stars.join(", "))










