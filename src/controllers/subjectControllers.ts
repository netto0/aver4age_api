import { Request, Response } from "express";
import { SubjectModel } from "../models/Subject";

export async function createSubject(req: Request, res: Response) {
  try {
    const data = req.body;
    const subject = await SubjectModel.create(data);
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    return res.status(201).json(subject);
  } catch (e: any) {
    console.log("Erro no sistema ", e);
  }
}

export async function getSubjects(req: Request, res: Response) {
  try {
    const subjects = await SubjectModel.find();
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json(subjects);
  } catch (e: any) {
    console.log("Erro no sistema ", e);
  }
}

export async function getSubjectByID(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const subject = await SubjectModel.findById(id);

    if (!subject) {
      return res.status(404).json({ error: "A matéria não existe" });
    }
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json(subject);
  } catch (e: any) {
    console.log("Erro no sistema ", e);
  }
}

export async function deleteSubject(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const subject = await SubjectModel.findById(id);

    if (!subject) {
      return res.status(404).json({ error: "A matéria não existe" });
    }
    await subject.deleteOne();
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json({ msg: "A matéria foi deletada com sucesso!" });
  } catch (e: any) {
    console.log("Erro no sistema ", e);
  }
}

export async function updateSubject(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const subject = await SubjectModel.findById(id);

    if (!subject) {
      return res.status(404).json({ error: "A matéria não existe!" });
    }
    await SubjectModel.updateOne({ _id: id }, data);
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (e: any) {
    console.log("Erro no sistema ", e);
  }
}
