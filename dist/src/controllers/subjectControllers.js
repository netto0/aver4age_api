"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubject = exports.deleteSubject = exports.getSubjectByID = exports.getSubjects = exports.createSubject = void 0;
const Subject_1 = require("../models/Subject");
function createSubject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const subject = yield Subject_1.SubjectModel.create(data);
            return res.status(201).json(subject);
        }
        catch (e) {
            console.log("Erro no sistema ", e);
        }
    });
}
exports.createSubject = createSubject;
function getSubjects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subjects = yield Subject_1.SubjectModel.find();
            return res.status(200).json(subjects);
        }
        catch (e) {
            console.log("Erro no sistema ", e);
        }
    });
}
exports.getSubjects = getSubjects;
function getSubjectByID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const subject = yield Subject_1.SubjectModel.findById(id);
            if (!subject) {
                return res.status(404).json({ error: "A matéria não existe" });
            }
            return res.status(200).json(subject);
        }
        catch (e) {
            console.log("Erro no sistema ", e);
        }
    });
}
exports.getSubjectByID = getSubjectByID;
function deleteSubject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const subject = yield Subject_1.SubjectModel.findById(id);
            if (!subject) {
                return res.status(404).json({ error: "A matéria não existe" });
            }
            yield subject.deleteOne();
            return res.status(200).json({ msg: "A matéria foi deletada com sucesso!" });
        }
        catch (e) {
            console.log("Erro no sistema ", e);
        }
    });
}
exports.deleteSubject = deleteSubject;
function updateSubject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const data = req.body;
            const subject = yield Subject_1.SubjectModel.findById(id);
            if (!subject) {
                return res.status(404).json({ error: "A matéria não existe!" });
            }
            yield Subject_1.SubjectModel.updateOne({ _id: id }, data);
            return res.status(200).json(data);
        }
        catch (e) {
            console.log("Erro no sistema ", e);
        }
    });
}
exports.updateSubject = updateSubject;
