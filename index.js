import app from "./src/app.js";
import { config } from "./src/config.js";
import { connect } from "./src/connect.js";

const { port } = config;

app.listen(port, () => {
  try {
    connect()
      .then(() => {
        console.log("Database connected successfully");
        console.log(
          `Server is running on port ${port} 🚀, url is http://localhost:${port}`
        );
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
        process.exit(1);
      });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
});
