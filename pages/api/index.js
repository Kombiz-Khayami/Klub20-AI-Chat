// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* errors to handle
empty request
empty prompt
prompt breaches moderation rules
prompt uses too many tokens
13s
18-19s
*/


const chatRequestOpts = {
  "model": "gpt-3.5-turbo",
  "messages": []
};
const assistant = "you are an assistant for a gym that answers questions ONLY about fitness and exercising. if anyone asks you questions not relating to fitness and/or exercising DO NOT answer them. Just say something like \"I'm sorry i'm unable to answer questions like that. But if you havr any fitness or exercising question i'd be happy to answer those.\"";


export default async function handler(req, res) {

   const prompt = JSON.parse(req.body)
   const requestMessages = prompt.messages;

   if(!requestMessages){
    throw new Error('no messages provided');
   }
   
   chatRequestOpts.messages = [
    {role: 'system', content: assistant},
    ...prompt.messages
   ];
   console.log(chatRequestOpts)
  const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(chatRequestOpts)
  }).then((res)=>res.json())
  console.log(process.env.OPENAI_KEY)
  console.log(chatResponse)
  return res.status(200).json(chatResponse.choices[0].message);
}
