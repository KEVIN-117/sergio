import { Sequelize } from "sequelize";
import { config } from "./config.js";
import { init } from "./model.js";

const { db } = config;

export async function connect() {
  const URI = `postgres://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`;
  // encode URI

  const sequelize = new Sequelize(URI, {
    dialect: "postgres",
    host: db.host,
  });
  await sequelize.authenticate();
  init(sequelize);
  await sequelize.sync(false);
}
