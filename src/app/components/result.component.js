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
var post_service_1 = require("../services/post.service");
var ResultComponent = /** @class */ (function () {
    function ResultComponent(postService) {
        this.postService = postService;
        this.posts = [];
    }
    ResultComponent.prototype.getAllPosts = function () {
        var _this = this;
        this.postService.getAllPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    ResultComponent.prototype.ngOnInit = function () {
        this.getAllPosts();
    };
    ResultComponent = __decorate([
        core_1.Component({
            selector: "result",
            templateUrl: "../../../public_html/templates/result.html"
        }),
        __metadata("design:paramtypes", [post_service_1.PostService])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map
