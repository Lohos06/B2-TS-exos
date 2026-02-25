//Types de base

let prenom: /*type*/ = "Jean";
let age: /*type*/ = 30;
let isStudent: /*type*/ = true;
let city: /*type*/ = "Paris";
let salary: /*type*/ = 2500.50;
let country: /*type*/ = "France";
let hasLicense: /*type*/ = false;
let email: /*type*/ = "jean@example.com";
let yearsExperience: /*type*/ = 5;
let isEmployed: /*type*/ = true;


//Types unions
let id: /*type*/ = "12345"; // Peut être une chaîne de caractères ou un nombre
let score: /*type*/ = 85; // Peut être un nombre ou une chaîne de caractères
let status: /*type*/ = "active"; // Peut être une chaîne de caractères ou un booléen
let level: /*type*/ = "beginner"; // Peut être une chaîne de caractères ou un nombre
let result: /*type*/ = "pass"; // Peut être une chaîne de caractères ou un booléen

//Types listes
let fruits: /*type*/ = ["apple", "banana", "orange"];
let numbers: /*type*/ = [1, 2, 3, 4, 5];
let namesAndNumber: /*type*/ = ["Alice", 25, "Charlie"];
let mixedList: /*type*/ = ["text", 42, true, "another text"];
let emptyList: /*type*/ = [];

//Types objets
let person: /*type*/ = {
    name: "Alice",
    age: 28,
    isStudent: false
};

let car: /*type avec nombre de porte optionnel*/ = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

//Types fonctions
function greet(name: /*type*/): /*type*/ {
    return `Hello, ${name}!`;
}

function add(a: /*type*/, b: /*type*/): /*type*/ {
    return a + b;
}

function isEven(num: /*type*/): /*type*/ {
    return num % 2 === 0;
}

