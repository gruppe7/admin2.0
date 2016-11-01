// Author@Henrik Bjørkheim
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
var index_1 = require("./index");
var LockerService = (function () {
    //constructor(private jsonp: Jsonp) {}
    function LockerService() {
    }
    LockerService.prototype.getLockers = function () {
        return Promise.resolve(index_1.LOCKERS);
    };
    LockerService.prototype.search = function (term) {
        /*
        var search = new URLSearchParams()
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');
        return this.jsonp
                    .get('Her legger vi inn callback fra Gunnar', { search })
                    .map((response) => response.json()[1]);
        */
        var foundLockers = [];
        for (var _i = 0, LOCKERS_1 = index_1.LOCKERS; _i < LOCKERS_1.length; _i++) {
            var Locker_1 = LOCKERS_1[_i];
            if (+term === Locker_1.id) {
                foundLockers.push(Locker_1);
            }
            return Promise.resolve(foundLockers);
        }
    };
    return LockerService;
}());
LockerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LockerService);
exports.LockerService = LockerService;
//# sourceMappingURL=locker.service.js.map