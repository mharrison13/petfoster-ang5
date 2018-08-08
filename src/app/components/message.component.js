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
var message_service_1 = require("../services/message.service");
var message_1 = require("../classes/message");
var organization_service_1 = require("../services/organization.service");
var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService, organizationService) {
        this.messageService = messageService;
        this.organizationService = organizationService;
        this.newMessage = new message_1.Message(null, null, null, null, null, null);
        this.messages = [];
        this.organizations = [];
        this.status = null;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.getAllMessages();
        this.getAllOrganizations();
    };
    MessageComponent.prototype.createMessage = function () {
        var _this = this;
        this.messageService.createMessage(this.newMessage)
            .subscribe(function (status) {
            _this.status = status;
            if (status.status === 200) {
                _this.getAllMessages();
            }
        });
    };
    MessageComponent.prototype.getAllMessages = function () {
        var _this = this;
        this.messageService.getAllMessages()
            .subscribe(function (messages) { return _this.messages = messages; });
    };
    MessageComponent.prototype.getAllOrganizations = function () {
        var _this = this;
        this.organizationService.getAllOrganizations()
            .subscribe(function (organizations) { return _this.organizations = organizations; });
    };
    MessageComponent = __decorate([
        core_1.Component({
            templateUrl: "../../../public_html/templates/message.html"
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService, organization_service_1.OrganizationService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map
