import express, { Request, Response } from "express";
import cors from "cors";
import { Anthropic } from "@anthropic-ai/sdk";
import { DATABASE_DESIGN_PROMPT, UI_DESIGN_PROMPT } from "./prompts/systemPrompts";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // Make sure to add this to your environment variables
});

console.log(process.env.ANTHROPIC_API_KEY)

// Database design endpoint
app.post("/api/generate-database", async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    console.log(description)
    
    const response = await anthropic.messages.create({
      model: "claude-3-sonnet-20240229",
      max_tokens: 4000,
      messages: [{
        role: "user",
        content: `${DATABASE_DESIGN_PROMPT}\n\n<marketplace_description> ${description}\n\n</marketplace_description>`
      }],
    });

    res.json({
      sql: response.content
    });
  } catch (error) {
    console.error('Error generating database schema:', error);
    res.status(500).json({ error: 'Failed to generate database schema' });
  }
});

// UI design endpoint
app.post("/api/generate-ui", async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    
    const response = await anthropic.messages.create({
      model: "claude-3-sonnet-20240229",
      max_tokens: 4000,
      messages: [{
        role: "user",
        content: `${UI_DESIGN_PROMPT}\n\nUI Description: ${description}`
      }],
    });

    res.json({
      design: response.content[0]
    });
  } catch (error) {
    console.error('Error generating UI design:', error);
    res.status(500).json({ error: 'Failed to generate UI design' });
  }
});

app.listen(3000, () => {
  console.log("Backend is Up");
});