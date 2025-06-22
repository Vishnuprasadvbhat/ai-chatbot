import {GoogleGenAI} from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

const api = new GoogleGenAI({apiKey: process.env.GEMMA_API});

async function main() {
  const res = await api.models.generateContent({
    model : '',
    contents : ''
  });
  console.log('res.text');
  
}

main();