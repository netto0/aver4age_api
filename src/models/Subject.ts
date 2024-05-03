import { model, Schema } from "mongoose";

const subjectSchema = new Schema(
  {
    name: { type: String },
    semester: { type: Number },
    avaQtt: { type: Number },
    avaGrades: { type: Object },
    pimGrade: { type: Number },
    examGrade: { type: Number },
    retakeGrade: { type: Number },
  },
  { timestamps: true }
);

export const SubjectModel = model("Subject", subjectSchema);
