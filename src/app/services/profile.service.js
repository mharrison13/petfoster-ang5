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
var http_1 = require("@angular/http");
var base_service_1 = require("./base.service");
var ProfileService = /** @class */ (function (_super) {
    __extends(ProfileService, _super);
    function ProfileService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        // Define the API endpoint
        _this.profileUrl = "api/profile/";
        return _this;
    }
    // Call to Profile API and edit the profile in question.
    ProfileService.prototype.editProfile = function (profile) {
        return (this.http.put(this.profileUrl + profile.profileId, profile)
            .map(this.extractMessage)
            .catch(this.handleError));
    };
    // Call to Profile API, and get a Profile object by id.
    ProfileService.prototype.getProfile = function (id) {
        return (this.http.get(this.profileUrl + id)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to the API to grab an array of profiles based on the user input.
    ProfileService.prototype.getProfileByProfileAtHandle = function (profileAtHandle) {
        return (this.http.get(this.profileUrl + profileAtHandle)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to the profile API, and grab the corresponding profile by its email.
    ProfileService.prototype.getProfileByProfileEmail = function (profileEmail) {
        return (this.http.get(this.profileUrl + profileEmail)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to the profile API, and grab the corresponding profile by its name.
    ProfileService.prototype.getProfileByProfileName = function (profileName) {
        return (this.http.get(this.profileUrl + profileName)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to profile API and grab the organization by its id.
    ProfileService.prototype.getOrganizationByOrganizationId = function (organizationId) {
        return (this.http.get(this.profileUrl + organizationId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to profile API and grab the organization by its city.
    ProfileService.prototype.getOrganizationByOrganizationCity = function (organizationCity) {
        return (this.http.get(this.profileUrl + organizationCity)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to profile API and grab the organization by its city.
    ProfileService.prototype.getOrganizationByOrganizationEmail = function (organizationEmail) {
        return (this.http.get(this.profileUrl + organizationEmail)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to profile API and grab the organization by its name.
    ProfileService.prototype.getOrganizationByOrganizationName = function (organizationName) {
        return (this.http.get(this.profileUrl + organizationName)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to profile API and grab the organization by its phone number.
    ProfileService.prototype.getOrganizationByOrganizationPhone = function (organizationPhone) {
        return (this.http.get(this.profileUrl + organizationPhone)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to profile API and grab the organization by its state.
    ProfileService.prototype.getOrganizationByOrganizationState = function (organizationState) {
        return (this.http.get(this.profileUrl + organizationState)
            .map(this.extractData)
            .catch(this.handleError));
    };
    // Call to profile API and grab the organization by its Zip.
    ProfileService.prototype.getOrganizationByOrganizationZip = function (organizationZip) {
        return (this.http.get(this.profileUrl + organizationZip)
            .map(this.extractData)
            .catch(this.handleError));
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProfileService);
    return ProfileService;
}(base_service_1.BaseService));
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map