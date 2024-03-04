"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandling(err, req, res, next) {
    if (err.message === "400") {
        return res.status(400).send({
            error: "URL not provided",
        });
    }
    else {
        return res.status(404).json({
            error: "Not Found",
        });
    }
}
exports.default = errorHandling;
