/*
**  Autor: Elias Sundby Aukan
**
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var STUDENTS = [
    { username: 'test', firstname: 'test', lastname: 'test', studyprogram: 'test', year: 2016, verified: true, studentCardId: '000001', }
];
var StudentService = (function () {
    function StudentService() {
    }
    StudentService.prototype.getStudents = function () {
        return Promise.resolve(STUDENTS);
    };
    StudentService.prototype.getStudentFromCardId = function (cardId) {
        for (var _i = 0, STUDENTS_1 = STUDENTS; _i < STUDENTS_1.length; _i++) {
            var Student_1 = STUDENTS_1[_i];
            if (cardId == Student_1.studentCardId) {
                return Promise.resolve(Student_1);
            }
        }
        return null;
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map