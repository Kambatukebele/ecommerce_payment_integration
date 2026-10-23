import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Working...");
});

// Error handler
app.use(errorHandler);
export default app;
