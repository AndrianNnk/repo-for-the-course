let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 140;
car1.driver = {
  name: "Andrian Naniuk",
  category: "C",
  personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

let car2 = new Object();
car2.color = "yeloow";
car2.maxSpeed = 90;
car2.driver = {
  name: "Andrian Naniuk",
  category: "B",
  personalLimitations: null
};
car2.tuning = false;
car2.numberOfAccidents = 2;

car1.drive = function() {
  console.log("I am not driving at night");
};
car1.drive(); 

car2.drive = function() {
  console.log("I can drive anytime");
};
car2.drive(); 

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};

Truck.prototype.trip = function() {
  if (!this.driver) {
    console.log("No driver assigned");

  } else {
    let message = "Driver " + this.driver.name;
    message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
    message += " and has " + this.driver.experience + " years of experience";
    console.log(message);
  }
};

let truck1 = new Truck("white", 25000, 125, "Mercedes", "Actros");
truck1.AssignDriver("Tom Hanks", true, 12);
truck1.trip(); 

let truck2 = new Truck("grey", 20000, 110, "Mercedes", "Axor");
truck2.AssignDriver("Michael Scott", false, 5);
truck2.trip(); 
