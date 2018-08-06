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
var PostService = /** @class */ (function (_super) {
    __extends(PostService, _super);
    function PostService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.postUrl = "api/post/";
        return _this;
    }
    PostService.prototype.deletePost = function (id) {
        return (this.http.delete(this.postUrl + id)
            .map(this.extractMessage)
            .catch(this.handleError));
    };
    PostService.prototype.createPost = function (post) {
        return (this.http.post(this.postUrl, post)
            .map(this.extractMessage)
            .catch(this.handleError));
    };
    PostService.prototype.editPost = function (post) {
        return (this.http.put(this.postUrl + post.postId, post)
            .map(this.extractMessage)
            .catch(this.handleError));
    };
    PostService.prototype.getPost = function (id) {
        return (this.http.get(this.postUrl + id)
            .map(this.extractData)
            .catch(this.handleError));
    };
    PostService.prototype.getPostsByPostId = function (postId) {
        return (this.http.get(this.postUrl + postId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    PostService.prototype.getPostsByPostOrganizationId = function (postOrganizationId) {
        return (this.http.get(this.postUrl + "?postOrganizationId=" + postOrganizationId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    PostService.prototype.getPostsByPostBreed = function (postBreed) {
        return (this.http.get(this.postUrl + postBreed)
            .map(this.extractData)
            .catch(this.handleError));
    };
    PostService.prototype.getPostsByPostDescription = function (postDescription) {
        return (this.http.get(this.postUrl + postDescription)
            .map(this.extractData)
            .catch(this.handleError));
    };
    PostService.prototype.getPostsByPostSex = function (postSex) {
        return (this.http.get(this.postUrl + postSex)
            .map(this.extractData)
            .catch(this.handleError));
    };
    PostService.prototype.getAllPosts = function () {
        return (this.http.get(this.postUrl)
            .map(this.extractData)
            .catch(this.handleError));
    };
    PostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PostService);
    return PostService;
}(base_service_1.BaseService));
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map