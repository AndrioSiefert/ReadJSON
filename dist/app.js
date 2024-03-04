"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_js_1 = __importDefault(require("./routes/router.js"));
var errorHandling_js_1 = __importDefault(require("./middleware/errorHandling.js"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", router_js_1.default);
app.use(errorHandling_js_1.default);
var PORT = 3000;
app.listen(PORT, function () {
    console.log("server ON");
});
exports.default = app;
