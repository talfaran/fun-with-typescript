"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, department, salary) {
        var _this = _super.call(this, firstName, lastName, department, salary) || this;
        _this.subordinates = new Array();
        return _this;
    }
    Manager.prototype.greeting = function () {
        console.log("Hi, I’m " + this.firstName + "and I manage the " + this.department + "department");
    };
    Manager.prototype.getNewEmployee = function (subordinate) {
        this.subordinates.push(subordinate);
    };
    Manager.prototype.fireSubordinates = function () {
        for (var index = 0; index < this.subordinates.length; index++) {
            console.log("sorry ${subordinates[i]}, you are fired..");
        }
    };
    return Manager;
}(Employee_1["default"]));
exports["default"] = Manager;
