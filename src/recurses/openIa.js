require('dotenv').config();
const OpenAI= require('openai');

console.log(process.env.API_KEY );
const openai = new OpenAI({ apiKey: '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'});




async function main(){
    const responce= await openai.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    })

    console.log(responce);
}

main();