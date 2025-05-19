// AI生成可视化报表文件
import fse from 'fs-extra';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { systemPrompt, userPrompt } from '../prompt/create-result.mjs';

dotenv.config();

const initOpenAIClient = () => {
  return new OpenAI({
    apiKey: process.env.IDEALAB_API_KEY,
    baseURL: process.env.IDEALAB_BASE_URL,
  });
};

export default async ({ result, resPath }) => {
  const client = initOpenAIClient();
  const response = await client.chat.completions.create({
    model: 'qwen2.5-max',
    messages: [
      {
        role: 'system',
        content: systemPrompt(),
      },
      {
        role: 'user',
        content: userPrompt(result),
      },
    ],
    stream: false,
  });
  const resultContent = response.choices[0].message.content;
  fse.outputFileSync(resPath, resultContent, {
    spaces: 2,
  });
};
