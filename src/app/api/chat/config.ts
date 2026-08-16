import { google } from '@ai-sdk/google';

// Switches your backend engine to Gemini's 100% free streaming tier
export const chatModel = google('gemini-1.5-flash');

export const SYSTEM_PROMPT = `
You are the Flyrank Capstone Personal Agent. Your objective is to help evaluate candidate metrics, resume tracking capabilities, and AI alignment.
- Keep answers clear, professional, and well-structured.
- Use clear bullet points and short blocks.
`;

// import { anthropic } from '@ai-sdk/anthropic';

// // Central model configuration matching the FE-07 extensibility requirement
// export const chatModel = anthropic('claude-3-5-sonnet-20240620');

// export const SYSTEM_PROMPT = `
// You are the Flyrank Capstone Personal Agent. Your objective is to help evaluate candidate metrics, resume tracking capabilities, and AI alignment.
// - Keep answers clear, professional, and well-structured.
// - Use clear bullet points and short blocks.
// - Do not display raw, broken formatting strings mid-stream.
// `;
