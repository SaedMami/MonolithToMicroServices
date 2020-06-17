import { Sequelize } from "sequelize-typescript";

export const config = {
  sequelize: new Sequelize({
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    storage: ":memory:",
    dialect: "postgres",
  }),
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
