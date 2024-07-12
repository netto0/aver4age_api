import { model, Schema } from "mongoose";

const subjectSchema = new Schema(
  {
    name: { type: String },
    semester: { type: Number },
    avaGrade: { type: Number },
    pimGrade: { type: Number },
    examGrade: { type: Number },
    retakeGrade: { type: Number },
    avg: { type: Number },
  },
  { timestamps: true }
);

export const SubjectModel = model("Subject", subjectSchema);
