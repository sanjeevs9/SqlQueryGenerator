"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sdk_1 = require("@anthropic-ai/sdk");
const systemPrompts_1 = require("./prompts/systemPrompts");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Initialize Anthropic client
const anthropic = new sdk_1.Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY, // Make sure to add this to your environment variables
});
console.log(process.env.ANTHROPIC_API_KEY);
// Database design endpoint
app.post("/api/generate-database", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description } = req.body;
        console.log(description);
        const response = yield anthropic.messages.create({
            model: "claude-3-sonnet-20240229",
            max_tokens: 4000,
            messages: [{
                    role: "user",
                    content: `${systemPrompts_1.DATABASE_DESIGN_PROMPT}\n\n<marketplace_description> ${description}\n\n</marketplace_description>`
                }],
        });
        res.json({
            sql: response.content
        });
    }
    catch (error) {
        console.error('Error generating database schema:', error);
        res.status(500).json({ error: 'Failed to generate database schema' });
    }
}));
// UI design endpoint
app.post("/api/generate-ui", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description } = req.body;
        const response = yield anthropic.messages.create({
            model: "claude-3-sonnet-20240229",
            max_tokens: 4000,
            messages: [{
                    role: "user",
                    content: `${systemPrompts_1.UI_DESIGN_PROMPT}\n\nUI Description: ${description}`
                }],
        });
        res.json({
            design: response.content[0]
        });
    }
    catch (error) {
        console.error('Error generating UI design:', error);
        res.status(500).json({ error: 'Failed to generate UI design' });
    }
}));
app.listen(3000, () => {
    console.log("Backend is Up");
});
