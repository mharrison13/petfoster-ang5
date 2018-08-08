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
var post_service_1 = require("../services/post.service");
var post_1 = require("../classes/post");
var ng2_file_upload_1 = require("ng2-file-upload");
var ng2_cookies_1 = require("ng2-cookies");
var rxjs_1 = require("rxjs");
require("rxjs/add/observable/from");
var PostComponent = /** @class */ (function () {
    function PostComponent(postService, route) {
        this.postService = postService;
        this.route = route;
        this.uploader = new ng2_file_upload_1.FileUploader({
            itemAlias: "dog",
            url: "./api/image/",
            headers: [{ name: "X-XSRF-TOKEN", value: ng2_cookies_1.Cookie.get("XSRF-TOKEN") }],
            additionalParameter: {}
        });
        this.posts = [];
        this.status = null;
        this.post = new post_1.Post(null, null, null, null, null, null, null);
        this.cloudinaryPublicId = null;
        this.cloudinaryPublicIdObservable = new rxjs_1.Observable();
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var reply = JSON.parse(response);
            _this.cloudinaryPublicId = reply.data;
            _this.cloudinaryPublicIdObservable = rxjs_1.Observable.from(_this.cloudinaryPublicId);
        };
    };
    PostComponent.prototype.getPost = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.postService.getPost(+params["id"]); })
            .subscribe(function (reply) { return _this.post = reply; });
    };
    PostComponent.prototype.createPost = function () {
        var additionalParameter = {
            postOrganizationId: this.post.postOrganizationId,
            postBreed: this.post.postBreed,
            postDescription: this.post.postDescription,
            postSex: this.post.postSex,
            postType: this.post.postType
        };
        this.uploader.options.additionalParameter = additionalParameter;
        this.uploader.uploadAll();
    };
    PostComponent = __decorate([
        core_1.Component({
            templateUrl: "../../../public_html/templates/post.html"
        }),
        __metadata("design:paramtypes", [post_service_1.PostService, router_1.ActivatedRoute])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map
