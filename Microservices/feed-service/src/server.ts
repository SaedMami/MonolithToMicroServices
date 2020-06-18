import express from "express";
import bodyParser from "body-parser";
import { FeedItem } from "./v0/model/FeedItem";
import { config } from "./config/config";
import { FeedRouter } from "./v0/router/feed.router";
import cors from "cors";

(async () => {
  const feedModel = [FeedItem];
  config.sequelize.addModels(feedModel);
  await config.sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());

  app.use(
    cors({
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization",
      ],
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: config.url,
    })
  );

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/v0");
  });

  app.use("/v0", FeedRouter);

  // Start the Server
  app.listen(port, () => {
    console.log(`server running`);
    console.log(`press CTRL+C to stop server`);
  });
})();
