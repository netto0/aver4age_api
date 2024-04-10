import { body } from "express-validator";

export const subjectCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome da matéria precisa ser um texto.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("semester")
      .notEmpty()
      .withMessage("Informe o semestre da matéria."),
      body("avaQtt")
      .notEmpty()
      .withMessage("Preencha a quantidade de aulas.")
  ];
};
