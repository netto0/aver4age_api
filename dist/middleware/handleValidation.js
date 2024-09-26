"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractectErrors = [];
    errors.array().map((err) => {
        if (err.type === "field") {
            extractectErrors.push({ [err.path]: err.msg });
        }
        return res.status(422).json({ errors: extractectErrors });
    });
};
exports.validate = validate;
