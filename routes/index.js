const questionController = require("../controllers/").questions;

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Questions API!",
    })
  );

  app.get("/api/questions", questionController.list);
  app.post("/api/question", questionController.create);
  app.get("/api/question/:questionId", questionController.retrieve);
  app.put("/api/question/:questionId", questionController.update);
  app.delete("/api/question/:questionId", questionController.destroy);
};
