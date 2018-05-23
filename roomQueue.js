"use strict";
exports.__esModule = true;
var Room = /** @class */ (function () {
    function Room() {
        this.occupants = new Array();
    }
    Room.prototype.addOccupant = function (newOccupant) {
        this.occupants.push(newOccupant);
        console.log(this.occupants);
    };
    Room.prototype.emptyRoom = function () {
        var _this = this;
        var currentOccupants = this.occupants;
        this.occupants.forEach(function () {
            _this.occupants.pop();
        });
    };
    Room.prototype.removeAnoccupant = function (occupantToRemove) {
        var checkIfFound = false;
        for (var index = 0; index < this.occupants.length; index++) {
            if (occupantToRemove.firstName == this.occupants[index].firstName && occupantToRemove.lastName == this.occupants[index].lastName) {
                this.occupants.splice(index, 1);
                checkIfFound = true;
                break;
            }
        }
        if (checkIfFound != true) {
            console.log("there is no one here named " + occupantToRemove.firstName);
        }
    };
    return Room;
}());
exports["default"] = Room;
