// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// ⸻

// Ans 1)

// let user1 = {
//   name: "Parshva",
//   email: "PAtel@gmail.com",
//   login: function () {
//     console.log("User logged in");
//   },
// };

// console.log(user1.login());

// ans 2

// class User {
//   constructor(name, email) {
//     (this.name = name), (this.email = email);
//   }
//   login() {
//     return "User logged in";
//   }
// }

// let u1 = new User("Parshva", "Patel@gmail.com");
// let u2 = new User("Patel", "Patel@gmail.com");
// let u3 = new User("patidar", "Patel@gmail.com");
// let u4 = new User("KadvaP", "Patel@gmail.com");
// let u5 = new User("MayP", "Patel@gmail.com");

// Ans 3

// let product = {
//   name: "Iphone",
//   price: 3600,
//   discountPrice: function () {
//     return this.price - 400;
//   },
// };

// console.log(product.discountPrice());

// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// ans 4

// class Car {
//   constructor(brand, speed) {
//     (this.brand = brand), (this.speed = speed);
//   }
//   drive() {
//     return this.brand + " -> " + this.speed;
//   }
// }

// let C1 = new Car("Maruti", 170);
// let C2 = new Car("VW", 200);

// console.log(C1.drive())

// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

// Ans 7

// class Student {
//   constructor(name, rollnumber) {
//     (this.name = name), (this.rollnumber = rollnumber);
//   }
// }

// Student.prototype.introduce = function () {
//   return this.name + " --> " + this.rollnumber;
// };

// let U1 = new Student("Parshva", 120);
// let U2 = new Student("Patel", 130);
// let U3 = new Student("Patidar", 140);
// console.log(U2.introduce());

// ans 8

// class Student {
//   constructor(name, rollnumber) {
//     (name = name), (rollnumber = rollnumber);
//   }
// }

// Student.prototype.introduce = function () {
//   return this.name + " --> " + this.rollnumber;
// };

// let U1 = new Student("Parshva", 120);
// let U2 = new Student("Patel", 130);
// let U3 = new Student("Patidar", 140);

// console.log(U1.name,U1.rollnumber);

// Undefined

// Ans 9)

// let obj = {
//   name: function () {
//     console.log(this);
//   },
//   arrowName: () => {
//     console.log(this);
//   },
// };

// obj.name();
// //Object
// obj.arrowName();
// //Window

// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.

// ⸻

//Ans 10)

// function Student(name, rollNo) {
//   (this.name = name), (this.RollNo = rollNo);
// }

// let s1 = new Student("Parshva", 120);

// Ans 11)

// function Student(name, rollNo) {
//   (this.name = name), (this.RollNo = rollNo);
// }

// Student.prototype.Login = function () {
//     return "User Logged IN"
// };

// let s1 = new Student("Parshva", 120);

// Ans 12)

// function Student(name, rollNo) {
//   (this.name = name), (this.RollNo = rollNo);
//   this.Login = function () {
//     return "User Logged IN";
//   };
// }

// Student.prototype.Login = function () {
//   return "User Logged in";
// };

// let s1 = new Student("Parshva", 120);
// let s2 = new Student("Patel", 120);

// console.log(s1.Login === s2.Login);

// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.

// Ans 13

// let obj = {
//   name: "Parshva",
// };

// function abcd() {
//   console.log(this.name);
// }

// abcd.call(obj);

// // Ans 14
// let obj = {
//   name: "Patel",
//   roll: 24,
// };

// function abcd(a, b, c, d) {
//   console.log(this.name, a, b, c, d);
// }

// abcd.apply(obj,[1,2,3,4])

// Ans 14
// let obj = {
//   name: "Patel",
//   roll: 24,
// };

// function abcd(a, b, c, d) {
//   console.log(this.name, a, b, c, d);
// }

// let a = abcd.bind(obj,1,2,3,4)

// a()

// Ans 15
// let person1 = {
//   name: "Parshva",
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };

// let person2 = {
//   name: "Raj",
// };
// person1.greet.call(person2);

// Questions Section 2

// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.

// ⸻

// Ans 1
// let laptop = {
//   brand: "HP",
//   price: 25000,
//   start: function () {
//     return "Laptop started";
//   },
// };

// console.log(laptop.start());

// Ans 2

// let laptop = {
//   brand: "HP",
//   price: 30000,
//   start: function () {
//     return "Laptop started";
//   },
//   increasePrice: function () {
//     return this.price + (this.price * 10) / 100;
//   },
// };

// console.log(laptop.increasePrice());

// Ans 3

// class Laptop {
//   constructor(brand, price) {
//     (this.brand = brand), (this.price = price);
//   }
//   start() {
//     return "Laptop started";
//   }
//   increasePrice() {
//     return this.price + (this.price * 10) / 100;
//   }
// }

// let l1 = new Laptop("HP", 100000);
// let l2 = new Laptop("HP", 10000);
// let l3 = new Laptop("HP", 10000);
// let l4 = new Laptop("HP", 10000);
// let l5 = new Laptop("HP", 1000);
// let l6 = new Laptop("HP", 1000);
// let l7 = new Laptop("HP", 100);
// let l8 = new Laptop("HP", 1000);
// let l9 = new Laptop("HP", 100000);
// let l10 = new Laptop("HP", 100000);

// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

// ⸻

// Ans 4
// class Employee {
//   constructor(name, salary) {
//     (this.name = name), (this.salary = salary);
//   }
//   showDetails() {
//     return this.name + " ---> " + this.salary;
//   }
// }

// // Ans 5

// let e1 = new Employee("Parshva", 120000);
// let e2 = new Employee("Patel", 125000);
// let e3 = new Employee("Patidar", 129000);

// e1.name = "Passudhi";

// no modifying the same class object is not effect other object

// Ans 6
// Class container is better options because class is blueprint of making new objects

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

// ⸻

// ans 7

// class BankAccount {
//   constructor(accountHolderName, balance) {
//     (this.name = accountHolderName), this.balance = balance;
//   }
//   deposit(amount) {
//     this.balance += amount
//   }
// }
// let a1 = new BankAccount("Parshva", 1000);
// let a2 = new BankAccount("Patel",500)

// a1.deposit(500);

// Each object created from a class has its own copy of properties.
// So when we deposit money in the first bank account, only its balance changes. The second account remains unchanged because it is a completely separate object in memory.

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

// ⸻

// // Ans SECTION 4

// // Step 11
// const profile = {
//   username: "Parshva",
//   printName() {
//     console.log(this.username);
//   }
// };

// // Step 12
// profile.printName();
// // Output: Parshva

// // Step 13
// const show = profile.printName;
// show();
// // Output: undefined (this lost)

// // Step 14 (Fix)
// const showFixed = profile.printName.bind(profile);
// showFixed();
// // Output: Parshva

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

// ⸻

// // Ans sections 5
// function Vehicle(type, wheels) {
//   (this.type = type),
//     (this.wheels = wheels)
//     // (this.describe = function () {
//     //   return "This vehicle is best";
//     // });
// }
// Vehicle.prototype.describe = function(){
//     return "This vehicle is best";
// }
// let v1 = new Vehicle("Bike", 2);
// let v2 = new Vehicle("Car", 4);

// Inside the constuctor common method is declare then every object contains a memory of that object if we declare the method in prototype then it will become the shared memory

// Inside the constructor, every object gets its own copy of the method.
// If we put the method in the prototype, all objects use shared memory, so it's faster and efficient.

// // SECTION 6: call Method Practice
// // 	19.	Create a function showBrand that prints this.brand.
// // 	20.	Create two different objects with brand values.
// // 	21.	Use call to execute showBrand for both objects.
// // 	22.	Explain what problem call is solving here.

// // ⸻

// function showBrand() {
//   console.log(this.brand);
// }

// let brand1 = {
//   brand: "Apple",
// };

// let brand2 = {
//   brand: "sumsang",
// };

// showBrand.call(brand1);
// showBrand.call(brand2);

// call() solves the problem of controlling which object the function should use as this.

// // SECTION 7: apply Method Practice
// // 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// // 	24.	Create an object with a name property.
// // 	25.	Use apply to call introduce using the object and an array of arguments.
// // 	26.	Explain in simple words how apply differs from call.

// // ⸻

// function introduce(city, role) {
//   console.log(this.name, city, role);
// }

// let obj = {
//   name: "Parshva",
// };

// introduce.apply(obj, ["Visnagar", "WebDev"]);

// // SECTION 8: bind Method Practice
// // 	27.	Create a function greet that prints “Hello” followed by this.name.
// // 	28.	Bind this function to an object and store the returned function in a variable.
// // 	29.	Call the bound function later and observe the output.
// // 	30.	Explain why bind is useful when functions are executed later or inside callbacks.

// function greet() {
//   console.log(this.name);
// }

// let obj = {
//   name: "Hello",
// };


// let hey = greet.bind(obj)

// hey()