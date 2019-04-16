let appRouter = (app) => {
  console.log('comes here');

  app.get("/api", (req, res) => {
    console.log('wdhjh');

    res.status(200).json({ "message": "Passed" });
  });
}

module.exports = appRouter;