"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var JsonFormatted_js_1 = __importDefault(require("../models/JsonFormatted.js"));
var router = express_1.default.Router();
router.get("/", JsonFormatted_js_1.default.formatted);
router.get("/download", JsonFormatted_js_1.default.download);
exports.default = router;
