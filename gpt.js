// ---IMPORTS-------------------------------------------------------------

import { fetchNews, listForSMS } from './fetch.js';
import OpenAI from "openai";

// ---API-----------------------------------------------------------------

const openai = new OpenAI({
    apiKey: "API_KEY_HERE", // Replace with your actual API key
});

// ---GPT FORMATTING-------------------------------------------------------

export const gptFormatData = async () => {
    console.log("Fetching news...");
    await fetchNews(); // Wait for the news to be fetched
    console.log("News fetched successfully:", listForSMS);

    if (listForSMS.length === 0) {
        console.error("No headlines found. Exiting...");
        return;
    }

    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "assistant",
                content: "You are a marketing editor. Condense each of these headlines to be straight to the point. Separate each by a line break."
            },
            {
                role: "user",
                content: listForSMS.join('\n'), // Pass the list of headlines as a string
            },
        ],
    });

    // ---API RESPONSE & LOGS-------------------------------------------------------


    console.log("Response from GPT:");
    const formattedData = completion.choices[0].message.content; // Store the formatted data
    console.log(formattedData);

    return formattedData;

};
//gptFormatData();
