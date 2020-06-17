import express from "express";
import bodyParser from "body-parser";
import { User } from "./v0/model/User";
import { config } from "./config/config";
import { UserRouter } from "./v0/router/user.router";
import cors from "cors";

(async () => {
  const userModel = [User];
  config.sequelize.addModels(userModel);
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

  app.use("/v0", UserRouter);

  // Start the Server
  app.listen(port, () => {
    console.log(`server running`);
    console.log(`press CTRL+C to stop server`);
  });
})();
