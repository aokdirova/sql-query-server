import openai from "./api.js";

const model = "gpt-3.5-turbo";

const generateSqlQuery = async (queryDescription) => {
  const message = [
    {
      role: "system",
      content: `You are a translator from plain English to SQL.`,
    },
    {
      role: "user",
      content: `Convert the following natural language description into a SQL query:\n\nShow all all the elements in the table users`,
    },
    { role: "assistant", content: "SELECT * FROM users;" },
    {
      role: "user",
      content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`,
    },
  ];
  const response = await openai.chat.completions.create({
    messages: message,
    model: model,
    max_tokens: 100,
    temperature: 0,
  });
  return response.choices[0].message.content;
};

export default generateSqlQuery;
