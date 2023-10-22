module.exports = app => {
  const rating = require("../controllers/controller.js");
  const router = require("express").Router();
  router.post("/", rating.create);
  router.get("/", rating.findAll);
  router.get("/published", rating.findAllPublished);
  router.get("/:id", rating.findOne);
  router.put("/:id", rating.update);
  router.delete("/:id", rating.delete);
  router.delete("/", rating.deleteAll);
  app.use("/api/rating", router);

}
