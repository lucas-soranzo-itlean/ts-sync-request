"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sync_request_1 = __importDefault(require("sync-request"));
var SyncRequestService = /** @class */ (function () {
    function SyncRequestService() {
    }
    SyncRequestService.prototype.get = function (url, headers) {
        var syncHeaders = null;
        var res = null;
        if (headers != null) {
            var tmp_1 = {};
            headers.forEach(function (h) {
                tmp_1[h.Key] = h.Value;
            });
            syncHeaders = {
                headers: tmp_1
            };
            res = sync_request_1.default('GET', url, syncHeaders);
        }
        else {
            res = sync_request_1.default('GET', url);
        }
        var body = res.getBody('utf8');
        var o = JSON.parse(body);
        return o;
    };
    SyncRequestService.prototype.post = function (url, req, headers) {
        var options = null;
        var res = null;
        if (headers != null) {
            var tmp_2 = {};
            headers.forEach(function (h) {
                tmp_2[h.Key] = h.Value;
            });
            options = {
                json: JSON.parse(JSON.stringify(req)),
                headers: tmp_2
            };
            res = sync_request_1.default('POST', url, options);
        }
        else {
            options = {
                json: JSON.parse(JSON.stringify(req))
            };
            res = sync_request_1.default('POST', url, options);
        }
        var body = res.getBody('utf8');
        var o = JSON.parse(body);
        return o;
    };
    return SyncRequestService;
}());
exports.SyncRequestService = SyncRequestService;
var SyncRequestHeader = /** @class */ (function () {
    function SyncRequestHeader(key, val) {
        this.key = key;
        this.val = val;
        this.Key = this.key;
        this.Value = this.val;
    }
    return SyncRequestHeader;
}());
exports.SyncRequestHeader = SyncRequestHeader;
