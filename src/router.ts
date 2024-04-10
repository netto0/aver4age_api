import { Router, Request, Response } from "express";
import {
  createSubject,
  deleteSubject,
  getSubjectByID,
  getSubjects,
  updateSubject,
} from "./controllers/subjectControllers";
import { subjectCreateValidation } from "./middleware/subjectValidation";
import { validate } from "./middleware/handleValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!");
  })
  .post("/subject", subjectCreateValidation(), validate, createSubject)
  .get("/subject", getSubjects)
  .get("/subject/:id", getSubjectByID)
  .delete("/subject/:id", deleteSubject)
  .patch("/subject/:id", subjectCreateValidation(), validate, updateSubject);
