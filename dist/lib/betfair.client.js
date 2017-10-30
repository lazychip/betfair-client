"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var superagent = require("superagent");
var BetfairEnum = require("./betfair.enum");
exports.BetfairEnum = BetfairEnum;
__export(require("./betfair.enum"));
var debug = require("debug")("betting-server:betfair");
var request = require("request-promise");
var Betfair = /** @class */ (function () {
    function Betfair(appKey) {
        this.intervalFetchTime = 1000;
        this.doIntervalFetch = true;
        this.doKeepAlive = true;
        this.appKey = appKey;
    }
    Betfair.prototype.getBetfairHttp = function (url) {
        return superagent
            .post(url)
            .set("Accept", "application/json")
            .set("X-Authentication", this.sessionKey)
            .set("X-Application", this.appKey);
    };
    Betfair.prototype.keepAlive = function () {
        return this.getBetfairHttp("https://identitysso.betfair.com/api/keepAlive").send();
    };
    Betfair.prototype.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var res, jsonRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.username = username;
                        this.password = password;
                        return [4 /*yield*/, request.post("https://identitysso.betfair.com/api/login", {
                                headers: {
                                    "X-Application": "Y3BriwvLob4aN4Jb",
                                    Accept: "application/json"
                                },
                                form: {
                                    username: username,
                                    password: password
                                }
                            })];
                    case 1:
                        res = _a.sent();
                        debug("betfair login response", res);
                        jsonRes = JSON.parse(res);
                        if (jsonRes.status != "SUCCESS") {
                            throw new Error(JSON.parse(res).error);
                        }
                        debug(jsonRes);
                        this.sessionKey = jsonRes.token;
                        if (this.doIntervalFetch) {
                            this.intervalFetch();
                        }
                        if (!this.doKeepAlive) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.keepAlive()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, jsonRes];
                }
            });
        });
    };
    Betfair.prototype.listEventTypes = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listEventTypes/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listCompetitions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listCompetitions/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listTimeRanges = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listTimeRanges/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listEvents = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listEvents/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listMarketTypes = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listMarketTypes/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listCountries = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listCountries/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listVenues = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listVenues/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listMarketCatalogue = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listMarketCatalogue/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listMarketBook = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listMarketBook/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listRunnerBook = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listRunnerBook/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listMarketProfitAndLoss = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listMarketProfitAndLoss/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.listCurrentOrders = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var betfairHttpClient, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betfairHttpClient = this.getBetfairHttp("https://api.betfair.com/exchange/betting/rest/v1.0/listMarketProfitAndLoss/");
                        return [4 /*yield*/, betfairHttpClient.send(__assign({}, params))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                }
            });
        });
    };
    Betfair.prototype.intervalFetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        debug("session key", this.sessionKey);
                        debug("app key", this.appKey);
                        return [4 /*yield*/, this.listEventTypes({ filter: {} })];
                    case 1:
                        data = _b.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _b.sent();
                        _a = debug;
                        return [4 /*yield*/, this.login(this.username, this.password)];
                    case 3:
                        _a.apply(void 0, [(_b.sent()).body]);
                        debug(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Betfair;
}());
exports.Betfair = Betfair;
var betfair = new Betfair("");
exports.default = betfair;
