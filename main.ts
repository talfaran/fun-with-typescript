import Customer from "./Customer"
import Manager from "./Manager"
import Employee from "./Employee"
import WorkerInterface from "./workerinterface"
import Room from "./roomQueue"


var tal = new Customer("tal", "Faran", "Google");
var adi = new Customer("Adi", "Bar Yosef", "Facebook");
var limor = new Manager("Limor", "Faran", "HumanResources", 30000)
var ariel = new Manager("Ariel", "Hasson"," Human Resources", 122000)
var aviel = new Employee("Avi", "Faran", "Aconomics", 16000)
var hadar = new Employee("Hadar", "Glottman", "Programing", 100000)


var worker = Array<WorkerInterface>()
worker.push(tal, adi, aviel, hadar, limor, ariel);

for (let index = 0; index < worker.length; index++) {
    console.log(worker[index].firstName)
    worker[index].greeting();   
}

var managersRoom = new Room<Manager>();
var customerRoom = new Room <Customer>();
var EmployeeRoom = new Room<Employee>();

managersRoom.addOccupant(ariel)
customerRoom.addOccupant(tal);
customerRoom.addOccupant(adi);

console.log("current room status of cutomer room")
customerRoom.removeAnoccupant(tal);
console.log(customerRoom.occupants)
customerRoom.removeAnoccupant(limor);
