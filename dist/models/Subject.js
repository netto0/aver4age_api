"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectModel = void 0;
const mongoose_1 = require("mongoose");
const subjectSchema = new mongoose_1.Schema({
    name: { type: String },
    semester: { type: Number },
    avaGrade: { type: Number },
    pimGrade: { type: Number },
    examGrade: { type: Number },
    retakeGrade: { type: Number },
    avg: { type: Number },
}, { timestamps: true });
exports.SubjectModel = (0, mongoose_1.model)("Subject", subjectSchema);
