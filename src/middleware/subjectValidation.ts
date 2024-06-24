import { body } from "express-validator";

export const subjectCreateValidation = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Informe o nome da matéria.")
      .isString()
      .withMessage("O nome da matéria precisa ser um texto.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("semester")
      .notEmpty()
      .withMessage("Informe o semestre da matéria.")
      .isNumeric()
      .withMessage("O semestre precisa ser um número."),
    body("avaGrade")
      .exists()
      .withMessage("Informe a nota do ava."),
    body("examGrade")
      .exists()
      .withMessage("O campo 'examGrade' precisa ser incluído no objeto."),
    body("pimGrade")
      .exists()
      .withMessage("O campo 'pimGrade' precisa ser incluído no objeto."),
    body("retakeGrade")
      .exists()
      .withMessage("O campo 'retakeGrade' precisa ser incluído no objeto."),
  ];
};
