// Object declaration
let person = {
    firstName: "noman",
    lastName: "rauf",
    age: 23,
    isStudent: true
};

// Accessing properties
console.log("First Name:", person.firstName); 
console.log("Last Name:", person.lastName);   
console.log("Age:", person.age);              
console.log("Is Student:", person.isStudent); 


// Nested object
let employee = {
    firstName: "nmn",
    lastName: "rao",
    age: 25,
    position: {
        title: "Software Engineer",
        department: "Engineering"
    }
};

// Accessing nested properties
console.log("First Name:", employee.firstName);                   
console.log("Position Title:", employee.position.title);           
console.log("Position Department:", employee.position.department);


// Object with method
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    displayInfo: function() {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Year:", this.year);
    }
};


car.displayInfo();