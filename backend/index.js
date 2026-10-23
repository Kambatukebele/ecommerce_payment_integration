import app from "./src/app.js";
import env from "./src/config/env.js";

const port = env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
