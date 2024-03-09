import { Configuration, OpenAIApi } from 'openai-edge'
import OpenAI from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import {OpenAIStream, StreamingTextResponse} from "ai";



const config = new Configuration({
  apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAI(config)

const assistant = "you are an assistant for a gym that will Design programs for people based 4 main factors.\
1. their fitness goals.\
2. Their BMI\
3. Their Age\
4. Their Sex\
\
\
your programs should be written in long form with as much detail as is necessary. the questions you will get will look like this\
[fitness goal], [BMI], [Age], [Sex]";

//export const runtime = 'edge'

export default async function (req, res) {


  let { messages } = JSON.parse(req.body) 

  const requestMessages = messages;
  console.log("|now displaying 1 ||" + requestMessages + "||");

  if(!requestMessages){
   throw new Error('no messages provided');
  }
  
  messages = [{role: 'system', content: assistant}, {role: 'user', content: requestMessages}];
  console.log("|now displaying 2 ||" + JSON.stringify(messages, null, 4) + "||");
  
  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });
  console.log("|now displaying 3 ||"+completion.choices[0]+"||")
  console.log("|now displaying 4 ||"+typeof completion.choices[0].message.content+"||")
  //res.status(200).json("this is date")
  return res.status(200).json(completion.choices[0].message.content);
  // const stream = await OpenAIStream(completion)
  // return new StreamingTextResponse(stream)
}
