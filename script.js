/* SAME KEYS AND VALUES

function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}

*/

//Write an ES2015 Version

function createInstructor(firstName, lastName) {
    return {
        firstName, lastName
    };
}

//-------------------------------------------------------------

/* COMPUTED PROPERTY NAMES

var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

*/

//Write an ES2015 Version

let favoriteNumber = 12123;     //daughter's bday :)
let instructor = {
    firstName: "Anthony",
    [favoriteNumber]: "That is my favorite!"
};

//-------------------------------------------------------------

/* OBJECT METHODS

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

*/

//Write an ES2015 Version

const instructor2 = {
    firstName: "Anthony",
    sayHi() { return "Hi!"; },
    sayBye() { return this.firstName + "  says bye!"; }
}

//-------------------------------------------------------------

/* CREATE ANIMAL FUNCTION

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

*/

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}


