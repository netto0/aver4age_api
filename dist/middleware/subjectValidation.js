"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectCreateValidation = void 0;
const express_validator_1 = require("express-validator");
const subjectCreateValidation = () => {
    return [
        (0, express_validator_1.body)("name")
            .notEmpty()
            .withMessage("Informe o nome da matéria.")
            .isString()
            .withMessage("O nome da matéria precisa ser um texto.")
            .isLength({ min: 3 })
            .withMessage("O nome precisa ter no mínimo 3 caracteres."),
        (0, express_validator_1.body)("semester")
            .notEmpty()
            .withMessage("Informe o semestre da matéria.")
            .isNumeric()
            .withMessage("O semestre precisa ser um número."),
        (0, express_validator_1.body)("avaGrade")
            .exists()
            .withMessage("Informe a nota do ava."),
        (0, express_validator_1.body)("examGrade")
            .exists()
            .withMessage("O campo 'examGrade' precisa ser incluído no objeto."),
        (0, express_validator_1.body)("pimGrade")
            .exists()
            .withMessage("O campo 'pimGrade' precisa ser incluído no objeto."),
        (0, express_validator_1.body)("retakeGrade")
            .exists()
            .withMessage("O campo 'retakeGrade' precisa ser incluído no objeto."),
    ];
};
exports.subjectCreateValidation = subjectCreateValidation;
