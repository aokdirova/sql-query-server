import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openApiKey = process.env.VITE_OPEN_AI_API_KEY;

if (!openApiKey) {
  console.log("Open AI API key is not set in the server");
  process.exit();
}

const openai = new OpenAI({
  apiKey: openApiKey,
});

export default openai;
