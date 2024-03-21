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
your programs should be written in long form with as much detail as is necessary. When designing a program you should write out the workout routines \
example workout routine: \
day 1 upper day,\
Flat Bench Press: 3 sets of 50% (of your 1rep max) x 10 reps\
Inclined Dumbbell press: 3 sets (of your 35% 1rep max) x 12 reps\
Bicep barbell curl: 3 sets of (of your 35% 1rep max) 12 reps \
etc.\
\
day 2 leg day,\
Barbell Squats: 5 sets of 50% (of your 1rep max) x 8 rep \
etc.\
\
etc...\
\
the questions you will get will look like this\
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
/*

Based on the information you provided, I will design a program to help you become stronger. Given that your BMI is 21, which falls into the healthy range, and considering your age of 56, it's important to focus on strength training exercises that are safe and effective for your body.

Here is a sample program tailored to your fitness goals:

1. Warm-Up (5-10 minutes):
- Begin with a cardiovascular warm-up such as jogging in place or jumping jacks to increase your heart rate and warm up your muscles.

2. Strength Training (3 times per week):
- Perform compound movements such as squats, deadlifts, bench presses, rows, and overhead presses to target multiple muscle groups.
- Start with lighter weights and higher repetitions to focus on proper form and gradually increase the weight as you get stronger.
- Aim for 3 sets of 8-12 repetitions for each exercise, resting 1-2 minutes between sets.
- Include exercises that target all major muscle groups, including the chest, back, shoulders, legs, and arms.

3. Cardiovascular Exercise (2-3 times per week):
- Incorporate cardiovascular exercise such as brisk walking, cycling, or swimming to improve your cardiovascular health and endurance.
- Aim for 20-30 minutes of moderate-intensity cardio sessions to supplement your strength training program.

4. Flexibility and Mobility (Daily):
- Include stretching exercises to improve flexibility and mobility, focusing on all major muscle groups.
- Perform dynamic stretches before your workout and static stretches after your workout to prevent injury and improve recovery.

5. Recovery and Rest:
- Make sure to allow your body enough time to rest and recover between workouts to prevent overtraining and promote muscle growth.
- Get adequate sleep, stay hydrated, and maintain a healthy diet to support your fitness goals.

Remember to listen to your body and make adjustments to the program as needed. It's also recommended to consult with a fitness professional or personal trainer to ensure the program is safe and effective for your individual needs. Good luck on your journey to becoming stronger!

*/