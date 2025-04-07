import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getKeywords = async (req, res) => {
  const { input } = req.body;

  if (!input) return res.status(400).send({ error: "Missing input" });

  const prompt = `Extract the most relevant 3 to 5 keywords from this text. Return them as a JSON array of strings only:\n\n"${input}"`;

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const rawOutput = chatResponse.choices[0].message.content.trim();

    try {
      const output = JSON.parse(rawOutput);
      res.send({ output });
    } catch (err) {
      res.status(500).send({ error: "Failed to parse keywords", rawOutput });
    }
  } catch (err) {
    res
      .status(500)
      .send({ error: "Error generating keywords", message: err.message });
  }
};
