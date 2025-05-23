// AI生成可视化报表文件
import fse from 'fs-extra';
import initOpenAI from '../../../utils/initOpenAI.mjs';
import { systemPrompt, userPrompt } from '../prompt/create-result.mjs';

export default async ({ result, resPath }) => {
  const client = initOpenAI();
  const response = await client.chat.completions.create({
    model: 'gpt-4o-0513',
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
  const content = response.choices[0].message.content;
  const match = content.match(/```html\n([\s\S]*)\n```/);
  const resultContent = match ? match[1] : content;

  fse.outputFileSync(resPath, resultContent, {
    spaces: 2,
  });
};
