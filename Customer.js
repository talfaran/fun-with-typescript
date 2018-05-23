"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, companyName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
    }
    Customer.getFullName = function (firstName, lastName) {
        var fullName = firstName + lastName;
        return fullName;
    };
    Customer.prototype.greeting = function () {
        console.log("hi everyone, im you suctomer named " + this.firstName);
    };
    return Customer;
}());
exports["default"] = Customer;
