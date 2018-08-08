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
var sign_in_service_1 = require("../services/sign-in.service");
var sign_in_1 = require("../classes/sign-in");
var sign_up_service_1 = require("../services/sign-up.service");
var sign_up_1 = require("../classes/sign-up");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(SignInService, SignUpService, router) {
        this.SignInService = SignInService;
        this.SignUpService = SignUpService;
        this.router = router;
        this.signInData = new sign_in_1.SignIn(null, null);
        this.status = null;
        this.signUp = new sign_up_1.SignUp(null, null, null, null, null, null, null, null, null, null, null, null, null);
        // minified array of states, messy but saves an API call
        this.states = [{ "stateAbbreviation": "AL", "stateName": "Alabama" }, { "stateAbbreviation": "AK", "stateName": "Alaska" }, { "stateAbbreviation": "AS", "stateName": "American Samoa" }, { "stateAbbreviation": "AZ", "stateName": "Arizona" }, { "stateAbbreviation": "AR", "stateName": "Arkansas" }, { "stateAbbreviation": "CA", "stateName": "California" }, { "stateAbbreviation": "CO", "stateName": "Colorado" }, { "stateAbbreviation": "CT", "stateName": "Connecticut" }, { "stateAbbreviation": "DE", "stateName": "Delaware" }, { "stateAbbreviation": "DC", "stateName": "District Of Columbia" }, { "stateAbbreviation": "FM", "stateName": "Federated States Of Micronesia" }, { "stateAbbreviation": "FL", "stateName": "Florida" }, { "stateAbbreviation": "GA", "stateName": "Georgia" }, { "stateAbbreviation": "GU", "stateName": "Guam" }, { "stateAbbreviation": "HI", "stateName": "Hawaii" }, { "stateAbbreviation": "ID", "stateName": "Idaho" }, { "stateAbbreviation": "IL", "stateName": "Illinois" }, { "stateAbbreviation": "IN", "stateName": "Indiana" }, { "stateAbbreviation": "IA", "stateName": "Iowa" }, { "stateAbbreviation": "KS", "stateName": "Kansas" }, { "stateAbbreviation": "KY", "stateName": "Kentucky" }, { "stateAbbreviation": "LA", "stateName": "Louisiana" }, { "stateAbbreviation": "ME", "stateName": "Maine" }, { "stateAbbreviation": "MH", "stateName": "Marshall Islands" }, { "stateAbbreviation": "MD", "stateName": "Maryland" }, { "stateAbbreviation": "MA", "stateName": "Massachusetts" }, { "stateAbbreviation": "MI", "stateName": "Michigan" }, { "stateAbbreviation": "MN", "stateName": "Minnesota" }, { "stateAbbreviation": "MS", "stateName": "Mississippi" }, { "stateAbbreviation": "MO", "stateName": "Missouri" }, { "stateAbbreviation": "MT", "stateName": "Montana" }, { "stateAbbreviation": "NE", "stateName": "Nebraska" }, { "stateAbbreviation": "NV", "stateName": "Nevada" }, { "stateAbbreviation": "NH", "stateName": "New Hampshire" }, { "stateAbbreviation": "NJ", "stateName": "New Jersey" }, { "stateAbbreviation": "NM", "stateName": "New Mexico" }, { "stateAbbreviation": "NY", "stateName": "New York" }, { "stateAbbreviation": "NC", "stateName": "North Carolina" }, { "stateAbbreviation": "ND", "stateName": "North Dakota" }, { "stateAbbreviation": "MP", "stateName": "Northern Mariana Islands" }, { "stateAbbreviation": "OH", "stateName": "Ohio" }, { "stateAbbreviation": "OK", "stateName": "Oklahoma" }, { "stateAbbreviation": "OR", "stateName": "Oregon" }, { "stateAbbreviation": "PW", "stateName": "Palau" }, { "stateAbbreviation": "PA", "stateName": "Pennsylvania" }, { "stateAbbreviation": "PR", "stateName": "Puerto Rico" }, { "stateAbbreviation": "RI", "stateName": "Rhode Island" }, { "stateAbbreviation": "SC", "stateName": "South Carolina" }, { "stateAbbreviation": "SD", "stateName": "South Dakota" }, { "stateAbbreviation": "TN", "stateName": "Tennessee" }, { "stateAbbreviation": "TX", "stateName": "Texas" }, { "stateAbbreviation": "UT", "stateName": "Utah" }, { "stateAbbreviation": "VT", "stateName": "Vermont" }, { "stateAbbreviation": "VI", "stateName": "Virgin Islands" }, { "stateAbbreviation": "VA", "stateName": "Virginia" }, { "stateAbbreviation": "WA", "stateName": "Washington" }, { "stateAbbreviation": "WV", "stateName": "West Virginia" }, { "stateAbbreviation": "WI", "stateName": "Wisconsin" }, { "stateAbbreviation": "WY", "stateName": "Wyoming" }];
    }
    NavBarComponent.prototype.createSignIn = function () {
        var _this = this;
        this.SignInService.postSignIn(this.signInData)
            .subscribe(function (status) {
            _this.status = status;
            if (status.status === 200) {
                _this.router.navigate([""]);
                location.reload(true);
                _this.signInForm.reset();
                setTimeout(function () { $("signin-modal").modal('hide'); }, 1000);
            }
        });
    };
    NavBarComponent.prototype.createSignUp = function () {
        var _this = this;
        this.SignUpService.createSignUp(this.signUp)
            .subscribe(function (status) {
            _this.status = status;
            if (status.status === 200) {
                _this.signUpForm.reset();
                setTimeout(function () { $("signup-modal").modal('hide'); }, 500);
                _this.router.navigate([""]);
            }
        });
    };
    __decorate([
        core_1.ViewChild("signInForm"),
        __metadata("design:type", Object)
    ], NavBarComponent.prototype, "signInForm", void 0);
    __decorate([
        core_1.ViewChild("signUpForm"),
        __metadata("design:type", Object)
    ], NavBarComponent.prototype, "signUpForm", void 0);
    NavBarComponent = __decorate([
        core_1.Component({
            selector: "navbar",
            templateUrl: "../../../public_html/templates/navbar.html"
        })
        // sign in
        ,
        __metadata("design:paramtypes", [sign_in_service_1.SignInService, sign_up_service_1.SignUpService, router_1.Router])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map
