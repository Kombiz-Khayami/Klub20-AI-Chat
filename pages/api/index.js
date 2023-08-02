// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* errors to handle
empty request
empty prompt
prompt breaches moderation rules
prompt uses too many tokens
13s
18-19s
*/

const OPENAI_KEY = ""
const chatRequestOpts = {
  "model": "gpt-3.5-turbo",
  "messages": []
};


export default async function handler(req, res) {

   const prompt = JSON.parse(req.body)
   const requestMessages = prompt.messages;

   if(!requestMessages){
    throw new Error('no messages provided');
   }
   
   chatRequestOpts.messages = [
    {role: 'system', content: "You are a virtual assistant for a gym."},
    ...prompt.messages
   ];

  const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      Authorization: `Bearer ${OPENAI_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(chatRequestOpts)
  }).then((res)=>res.json())

  return res.status(200).json(chatResponse.choices[0].message);
}