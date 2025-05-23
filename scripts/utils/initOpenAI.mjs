import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const initOpenAI = () => {
  return new OpenAI({
    apiKey: process.env.IDEALAB_API_KEY,
    baseURL: process.env.IDEALAB_BASE_URL,
  });
};

export default initOpenAI;
