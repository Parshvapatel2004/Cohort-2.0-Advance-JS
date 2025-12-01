// class Createpen {
//   constructor() {
//     (this.name = "Saino"), (this.color = "blue"), (this.company = "flair");
//   }

//   classic() {
//     console.log("This is classic pen");
//   }
// }

// let pen1 = new Createpen();

// Simple Way to create class with same default value;

// class Createpen {
//   constructor(name, color, company) {
//     (this.name = name), (this.color = color), (this.company = company);
//   }

//   classic() {
//     console.log("This is classic pen");
//   }
// }

// let pen1 = new Createpen("Saino Love", "Black", "matrix");
// let pen2 = new Createpen("Saino softak", "blue", "matrix");
// let pen3 = new Createpen("Saino Trio", "darkblue", "matrix");
// let pen4 = new Createpen("Saino smile", "red", "matrix");

// New arguments and values while creating a new pen and new makes a blank object and makes the value of constructor to blank object

// class Createpen {
//   constructor(name, color) {
//     (this.name = name), (this.color = color);
//   }
// }
// Createpen.prototype.company = "Matrix"; // This is prototype and this is shared memory
// Createpen.prototype.classic = function () {
//   console.log("This is classic Pen");
// };

// let pen1 = new Createpen("Saino Love", "Black");
// let pen2 = new Createpen("Saino softak", "blue");
// let pen3 = new Createpen("Saino Trio", "darkblue");
// let pen4 = new Createpen("Saino smile", "red");

// Like in upper one the company and classic function we have seen that are reapt always and stores all memory to all new instance for saving memory and make code cleans we have to make prototype to shared memory for reapiting items
