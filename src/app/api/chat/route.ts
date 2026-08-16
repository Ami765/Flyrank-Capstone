import { streamText } from 'ai';
import { chatModel, SYSTEM_PROMPT } from './config';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: chatModel,
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.7,
    });

    // Updated line to match AI SDK version definitions
    return result.toTextStreamResponse();
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Streaming initialization failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
