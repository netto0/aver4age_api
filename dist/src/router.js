"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjectControllers_1 = require("./controllers/subjectControllers");
const subjectValidation_1 = require("./middleware/subjectValidation");
const handleValidation_1 = require("./middleware/handleValidation");
const router = (0, express_1.Router)();
exports.default = router
    .get("/test", (req, res) => {
    res.status(200).send("API Working!");
})
    .post("/subject", (0, subjectValidation_1.subjectCreateValidation)(), handleValidation_1.validate, subjectControllers_1.createSubject)
    .get("/subject", subjectControllers_1.getSubjects)
    .get("/subject/:id", subjectControllers_1.getSubjectByID)
    .delete("/subject/:id", subjectControllers_1.deleteSubject)
    .patch("/subject/:id", handleValidation_1.validate, subjectControllers_1.updateSubject);
