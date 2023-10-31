import express from "express";
import cors from "cors";

import generateSqlQuery from "./generate.js";

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res, next) => {
  res.send("Hello from API");
});

app.post("/generate", async (req, res, next) => {
  const queryDescription = req.body.queryDescription;
  try {
    const generatedQuery = await generateSqlQuery(queryDescription);
    res.json(generatedQuery);
  } catch (err) {
    console.error(err);
    res.status(500).send("internal server error");
  }
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
