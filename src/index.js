import express from "express";
import bodyParser from "body-parser";
import { getKeywords } from "./functions/getKeywords.js";

const app = express();
app.use(bodyParser.json());

app.post("/getKeywords", getKeywords);

app.get("/getKeywords", (req, res) => {
  res.json({
    name: "getKeywords",
    description: "Extracts 3-5 relevant keywords from a given text",
    input: {
      type: "string",
      description: "The text you want to extract keywords from",
      example: "Learning to code in JavaScript is fun and challenging.",
    },
    output: {
      type: "array",
      description: "A list of 3-5 relevant keywords",
      example: ["JavaScript", "code", "learning"],
    },
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
