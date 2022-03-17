const Question = require("../models").Question;

module.exports = {
  create(req, res) {
    return Question.create({
      level: req.body.level,
      text: req.body.text,
    })
      .then((question) => res.status(201).send(question))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Question.findAll()
      .then((questions) => res.status(200).send(questions))
      .catch((error) => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Question.findById(req.params.questionId)
      .then((question) => {
        if (!question) {
          return res.status(404).send({
            message: "Question Not Found",
          });
        }
        return res.status(200).send(question);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Question.findById(req.params.questionId)
      .then((question) => {
        if (!question) {
          return res.status(404).send({
            message: "Question Not Found",
          });
        }
        return question
          .update({
            level: req.body.level || question.level,
            text: req.body.text || question.text,
          })
          .then(() => res.status(200).send(question))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Question.findById(req.params.questionId)
      .then((question) => {
        if (!question) {
          return res.status(400).send({
            message: "Question Not Found",
          });
        }
        return question
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
