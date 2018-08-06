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
var MessageService = /** @class */ (function (_super) {
    __extends(MessageService, _super);
    function MessageService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.messageUrl = "./api/message/";
        return _this;
    }
    MessageService.prototype.getAllMessages = function () {
        return (this.http.get(this.messageUrl)
            .map(this.extractData)
            .catch(this.handleError));
    };
    MessageService.prototype.getMessageByMessageId = function (messageId) {
        return (this.http.get(this.messageUrl + messageId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    MessageService.prototype.getMessageByProfileId = function (profileId) {
        return (this.http.get(this.messageUrl + profileId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    MessageService.prototype.getMessageByOrganizationId = function (organizationId) {
        return (this.http.get(this.messageUrl + organizationId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    MessageService.prototype.getMessageByOrganizationProfileId = function (organizationProfileId) {
        return (this.http.get(this.messageUrl + organizationProfileId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    MessageService.prototype.getMessageByMessageProfileId = function (messageProfileId) {
        return (this.http.get(this.messageUrl + messageProfileId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    MessageService.prototype.getMessageByMessageOrganizationId = function (messageOrganizationId) {
        return (this.http.get(this.messageUrl + messageOrganizationId)
            .map(this.extractData)
            .catch(this.handleError));
    };
    MessageService.prototype.createMessage = function (message) {
        return (this.http.post(this.messageUrl, message)
            .map(this.extractMessage)
            .catch(this.handleError));
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MessageService);
    return MessageService;
}(base_service_1.BaseService));
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map