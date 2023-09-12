import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey:process.env.REACT_APP_APIKEY, // Update with your API key
  organizationId: process.env.REACT_APP_OrganizationID,
});



export async function sendMsgToOpenAi(message) {
  const res = await openai.completions.create({
    model: "text-davinci-003", // Update with the desired model
    prompt: message,
    max_tokens: 150 , 
    temperature: 0.1,
    top_p: 1, 
    presence_penalty: 0.6, 
    frequency_penalty: 0.6, 
  });
  return res.choices[0].text;
}
