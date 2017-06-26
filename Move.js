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
Object.defineProperty(exports, "__esModule", { value: true });
var HHT;
(function (HHT) {
    var Person = (function () {
        function Person(fname, address) {
            this.fname = fname;
            this.address = address;
        }
        Person.prototype.run = function () {
            console.log("Running");
        };
        Person.talk = function () {
            console.log("Talking");
        };
        return Person;
    }());
    HHT.Person = Person;
    // Export class for use
    var Student = (function (_super) {
        __extends(Student, _super);
        function Student(fname, address, fclass) {
            var _this = _super.call(this, fname, address) || this;
            _this.fclass = fclass;
            return _this;
        }
        Student.prototype.destruct = function () {
        };
        Student.prototype.learn = function () {
            console.log("Learning");
        };
        return Student;
    }(Person));
    HHT.Student = Student;
    function GetName(name, old) {
        if (old === void 0) { old = 20; }
        var info = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            info[_i - 2] = arguments[_i];
        }
        var result = "Name:" + name + ", Age: " + old + ", Infor: " + info;
        console.log(result);
    }
})(HHT = exports.HHT || (exports.HHT = {}));
//# sourceMappingURL=Move.js.map