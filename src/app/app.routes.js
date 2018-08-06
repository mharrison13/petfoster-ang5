"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var message_component_1 = require("./components/message.component");
var post_component_1 = require("./components/post.component");
var profile_component_1 = require("./components/profile.component");
var ng2_file_upload_1 = require("ng2-file-upload");
var navbar_component_1 = require("./components/navbar.component");
var ender_component_1 = require("./components/ender.component");
var about_component_1 = require("./components/about.component");
var result_component_1 = require("./components/result.component");
var sign_up_service_1 = require("./services/sign-up.service");
var sign_in_service_1 = require("./services/sign-in.service");
var sign_out_service_1 = require("./services/sign-out.service");
var sign_out_component_1 = require("./components/sign-out.component");
var organization_service_1 = require("./services/organization.service");
exports.allAppComponents = [
    home_component_1.HomeComponent,
    message_component_1.MessageComponent,
    profile_component_1.ProfileComponent,
    post_component_1.PostComponent,
    ng2_file_upload_1.FileSelectDirective,
    navbar_component_1.NavBarComponent,
    ender_component_1.EnderComponent,
    about_component_1.AboutComponent,
    result_component_1.ResultComponent,
    sign_out_component_1.SignOutComponent
];
exports.routes = [
    { path: "profile", component: profile_component_1.ProfileComponent },
    { path: "message", component: message_component_1.MessageComponent },
    { path: "post", component: post_component_1.PostComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "result", component: result_component_1.ResultComponent },
    { path: "sign-out", component: sign_out_component_1.SignOutComponent },
    { path: "", component: home_component_1.HomeComponent }
];
exports.appRoutingProviders = [sign_up_service_1.SignUpService, sign_in_service_1.SignInService, sign_out_service_1.SignOutService, organization_service_1.OrganizationService];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map