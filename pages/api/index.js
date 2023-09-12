import { Configuration, OpenAIApi } from 'openai-edge'
import {OpenAIStream, StreamingTextResponse} from "ai";



const config = new Configuration({
  apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(config)

const assistant = "you are an assistant for a gym that answers questions ONLY about fitness and exercising. if anyone asks you questions not relating to fitness and/or exercising DO NOT answer them. Just say something like \"I'm sorry i'm unable to answer questions like that. But if you havr any fitness or exercising question i'd be happy to answer those.\"";

export const runtime = 'edge'

export default async function (req, res) {


  let { messages } = await req.json() 

  const requestMessages = messages;

  if(!requestMessages){
   throw new Error('no messages provided');
  }
  
  messages = [{role: 'system', content: assistant}, ...messages];

   const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
    stream: true,
  });

  const stream = await OpenAIStream(completion)
  return new StreamingTextResponse(stream)
}
