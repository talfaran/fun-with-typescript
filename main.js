"use strict";
exports.__esModule = true;
var Customer_1 = require("./Customer");
var Manager_1 = require("./Manager");
var Employee_1 = require("./Employee");
var roomQueue_1 = require("./roomQueue");
var tal = new Customer_1["default"]("tal", "Faran", "Google");
var adi = new Customer_1["default"]("Adi", "Bar Yosef", "Facebook");
var limor = new Manager_1["default"]("Limor", "Faran", "HumanResources", 30000);
var ariel = new Manager_1["default"]("Ariel", "Hasson", " Human Resources", 122000);
var aviel = new Employee_1["default"]("Avi", "Faran", "Aconomics", 16000);
var hadar = new Employee_1["default"]("Hadar", "Glottman", "Programing", 100000);
var worker = Array();
worker.push(tal, adi, aviel, hadar, limor, ariel);
for (var index = 0; index < worker.length; index++) {
    console.log(worker[index].firstName);
    worker[index].greeting();
}
var managersRoom = new roomQueue_1["default"]();
var customerRoom = new roomQueue_1["default"]();
var EmployeeRoom = new roomQueue_1["default"]();
managersRoom.addOccupant(ariel);
customerRoom.addOccupant(tal);
customerRoom.addOccupant(adi);
console.log("current room status of cutomer room");
customerRoom.removeAnoccupant(tal);
console.log(customerRoom.occupants);
customerRoom.removeAnoccupant(limor);
