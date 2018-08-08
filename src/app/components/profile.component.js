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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var profile_service_1 = require("../services/profile.service");
var profile_1 = require("../classes/profile");
require("rxjs/add/operator/switchMap");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, route) {
        this.profileService = profileService;
        this.route = route;
        this.status = null;
        this.profile = new profile_1.Profile(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getCurrentProfile();
    };
    ProfileComponent.prototype.getCurrentProfile = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.profileService.getProfile(+params["id"]); })
            .subscribe(function (reply) { return _this.profile = reply; });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            templateUrl: "../../../public_html/templates/profile.html"
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, router_1.ActivatedRoute])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map
