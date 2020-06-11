import express from "express";
import { sequelize } from "./config/sequelize";

import bodyParser from "body-parser";
import { User } from "./v0/model/User";
import { UserRouter } from "./v0/router/user.router";

(async () => {
  const userModel = [User];
  sequelize.addModels(userModel);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8081;

  app.use(bodyParser.json());

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
