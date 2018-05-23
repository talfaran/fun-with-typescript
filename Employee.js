"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, department, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.salary = salary;
    }
    Employee.prototype.greeting = function () {
        console.log("im an employee with the name " + this.firstName);
    };
    return Employee;
}());
exports["default"] = Employee;
