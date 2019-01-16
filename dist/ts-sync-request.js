"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sync_request_1 = __importDefault(require("sync-request"));
var SyncRequestService = /** @class */ (function () {
    function SyncRequestService() {
    }
    SyncRequestService.prototype.get = function (url) {
        var res = sync_request_1.default('GET', url);
        var body = res.getBody('utf8');
        var o = JSON.parse(JSON.stringify(body));
        return o;
    };
    SyncRequestService.prototype.post = function (url, req) {
        var options = {
            json: JSON.parse(JSON.stringify(req))
        };
        var res = sync_request_1.default('POST', url, options);
        var body = res.getBody('utf8');
        var o = JSON.parse(JSON.stringify(body));
        return o;
    };
    return SyncRequestService;
}());
exports.SyncRequestService = SyncRequestService;
