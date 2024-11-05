// Constructor Notation
//     - Constructor functions are functions that are used as tempaltes for creating an object
//     - UNLIKE C#: we can still add/remove properties and methods from these objects
//     - Naming convention is UpperCamelCase
//     - a lot of times the parameters are the properties and methods from the object
//          - Property: A veriable insaide an object
//          - Method: A function insaide an object

// Constructor
function Person(age, eyecolor, firstName, lastName) {
  // Properties
  //      - 'this.' refers to the current instance of this "class" (object)
  //      - this.propertyName = value
  this.age = Number(age);
  this.eyecolor = eyecolor;
  this.firstName = firstName;
  this.lastName = lastName;
}

// Create an instance of Person
//     - This will set up a new space in ememory for our objec to live.
//     - Use the constructor function as the blue print ("class")

const myself = new Person(22, "green", "Ema", "Nimphius");
const zach = new Person(26, "blue", "Zach", "Burr");
const patrick = new Person(70, "blue", "Patrick", "Gerber");

// In JavaScript, you can add properties to objects, regardless of the contructor :(
myself.hairColor = "brown";

console.log(myself, zach, patrick);

// Method
// methods in HS are properties that hold functions
myself.sayHi = function () {
  console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
};

// Function to add a person and display in a card
function addPerson() {
  // Get values from input fields
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const eyeColor = document.getElementById("eyeColor").value;

  // Check for empty fields
  if (!firstName || !lastName || !age || !eyeColor) {
    alert("Please fill in all fields");
    return;
  }

  // Create a new Person instance
  const newPerson = new Person(age, eyeColor, firstName, lastName);

  // Display the person in a new card
  displayPersonCard(newPerson);

  // Clear input fields
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("eyeColor").value = "";
}

// Function to display a person's info in a card
function displayPersonCard(person) {
  const cardContainer = document.getElementById("cardsContainer");

  // Create a new card element
  const card = document.createElement("div");
  card.innerHTML = `
        <p style="margin-top: 10px;"><strong>Name:</strong> ${person.firstName} ${person.lastName}</p>
        <p><strong>Age:</strong> ${person.age}</p>
        <p><strong>Eye Color:</strong> ${person.eyecolor}</p>
    `;

  // Append the card to the container
  cardContainer.appendChild(card);
}

// Constructor
function Pet(name, bdate) {
  this.name = name;
  this.birthdate = bdate; // birthdate to show you can change it
  this.getInfo = function () {
    console.log(`Name: ${this.name} | Birthdate: ${this.birthdate}`);
  };
}

// Create an instance of Pet
const jamesPet = new Pet("Argus", new Date("03/24/2020"));
const myPet = new Pet("Coco", new Date("03/24/2020"));

// Arrays in JS can be created in 2 ways
//     - Using a constructor
//     - Using an array literal
const pets = [];
// Arrays have methods
//     - push() adds an element to the end of the array
// pets.push(jamesPet);
// pets.push(myPet);

// console.log(pets);

function createPetElement() {
  const petName = document.getElementById("pet-name").value;
  const petBdate = document.getElementById("pet-bdate").valueAsDate;
  const newPet = new Pet(petName, petBdate);
  pets.push(newPet);

  // document.createElement() this will return an HTML Object
  const petDiv = document.createElement("div");

  petDiv.innerHTML = `
        <div class="pet-name">
            <p style="margin-top: 10px;">
                <strong>Name:</strong> ${newPet.name}
            </p>
        </div>
        <div class="pet-bdate">
            <p>
                <strong>Birthdate:</strong> ${newPet.birthdate.toLocaleDateString()}
            </p>
        </div>
    `;

  // Add event listener through the JS
  //     - this is a bit better than doing it through the html
  // petDiv.onclick = newPet.getInfo;
  // Array of random pet facts
  const petFacts = [
    "Did you know? Cats can jump up to six times their length!",
    "Fun fact: Dogs have three eyelids!",
    "Rabbits have a nearly 360-degree field of vision.",
    "Goldfish have a memory span of about three months.",
    "A cat's nose print is unique, much like a human fingerprint.",
    "Dogs can smell up to 100,000 times better than humans!",
    "Some turtles can breathe through their butts!",
    "Ferrets sleep for 18-20 hours a day!",
    "Parrots can live up to 80 years!",
    "Hamsters' teeth never stop growing.",
    "Elephants are the only animals that can't jump.",
    "Horses can sleep both lying down and standing up.",
    "Some fish can recognize their owners' faces.",
    "A snail can sleep for three years!",
    "Otters hold hands when they sleep to keep from drifting apart.",
    "Dolphins have names for each other.",
    "Bats are the only mammals that can fly.",
    "A shrimp's heart is located in its head.",
    "Pigeons can recognize themselves in mirrors.",
    "Butterflies taste with their feet.",
    "Bees can detect human faces.",
    "A group of flamingos is called a 'flamboyance'.",
    "Horses have 10 different muscles in their ears.",
    "Dogs can learn more than 1000 words!",
    "Cats have whiskers on the backs of their front legs.",
  ];

  // Enhanced click event
  petDiv.onclick = function () {
    // Generate a random fact
    const randomFact = petFacts[Math.floor(Math.random() * petFacts.length)];

    // Create a custom message
    const message = `You selected the following animal:\n__________________________________\nName: ${newPet.name}\nBirthDate: ${newPet.birthdate.toLocaleDateString()}! 🐾\n__________________________________\nFun Fact: ${randomFact}`;

    // Display the message in an alert first
    alert(message);

    // Add a bounce effect after the alert closes
    petDiv.style.transition = "transform 0.3s ease";
    petDiv.style.transform = "scale(1.1)"; // Scale up slightly to simulate a bounce

    setTimeout(() => {
      petDiv.style.transform = "scale(1)"; // Reset to original size
    }, 300); // Reset after the bounce
  };

  document.getElementById("pets").appendChild(petDiv);

  document.getElementById("pet-name").value = "";
  document.getElementById("pet-bdate").value = "";
}
