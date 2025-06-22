import app from "./app.js";
import { connectDB } from "./db/connect.js";

const port = Number(process.env.PORT) || 5000;

/* Building a Chat bot */
// connections and listeners

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1);
  });