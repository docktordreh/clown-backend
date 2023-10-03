module.exports = app => {
  const model = require("../controllers/controller.js");
  var router = require("express").Router();
  router.post("/", model.create);
  router.get("/", model.findAll);
  router.get("/published", model.findAllPublished);
  router.get("/:id", model.findOne);
  router.put("/:id", model.update);
  router.delete("/:id", model.delete);
  router.delete("/", model.deleteAll);
  app.use("/api/model", router);

}
