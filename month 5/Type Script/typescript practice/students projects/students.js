"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Fanlar;
(function (Fanlar) {
    Fanlar["Mathematics"] = "Mathematics";
    Fanlar["Physics"] = "Physics";
    Fanlar["Information"] = "Information";
    Fanlar["Chemistry"] = "Chemistry";
    Fanlar["History"] = "History";
})(Fanlar || (Fanlar = {}));
var Fanbaholari = /** @class */ (function () {
    function Fanbaholari() {
        this.grades = []; // 'Grades' -> 'grades' to'g'rilandi
    }
    Fanbaholari.prototype.addGrade = function (fan, grade) {
        this.grades.push({ fan: fan, grade: grade });
    };
    Fanbaholari.prototype.calculateAverageGrade = function (fan) {
        // Method nomi kichik harflarda
        var filteredGrades = this.grades // 'filterdowngrade' nomi o'zgaruvchan bo'lishi kerak edi
            .filter(function (g) { return g.fan === fan; })
            .map(function (b) { return b.grade; });
        var overallGrade = filteredGrades.reduce(function (sum, value) { return sum + value; }, 0);
        return filteredGrades.length ? overallGrade / filteredGrades.length : 0;
    };
    return Fanbaholari;
}());
var OverallGrade = /** @class */ (function () {
    function OverallGrade() {
        this.grades = [];
    }
    OverallGrade.prototype.addGrade = function (fan, grade) {
        this.grades.push({ fan: fan, grade: grade });
    };
    OverallGrade.prototype.hisoblaUmumiyOrtabaho = function () {
        var _this = this;
        var result = [];
        Object.values(Fanlar).forEach(function (fan) {
            var filteredGrades = _this.grades
                .filter(function (g) { return g.fan === fan; })
                .map(function (b) { return b.grade; });
            var overallGrade = filteredGrades.reduce(function (sum, value) { return sum + value; }, 0);
            var ortaBaho = filteredGrades.length
                ? overallGrade / filteredGrades.length
                : 0;
            result.push({ fan: fan, middleGrade: ortaBaho }); // 'middleGrade' qo'shildi
        });
        return result;
    };
    return OverallGrade;
}());
var EditGrades = /** @class */ (function (_super) {
    __extends(EditGrades, _super);
    function EditGrades() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditGrades.prototype.editGrade = function (fan, oldBaho, newGrade) {
        var index = this.grades.findIndex(
        // 'grades' to'g'rilandi
        function (b) { return b.fan === fan && b.grade === oldBaho; });
        if (index !== -1) {
            this.grades[index].grade = newGrade;
        }
    };
    return EditGrades;
}(Fanbaholari));
console.log();
console.log();
