// ---IMPORTS-------------------------------------------------------------
//import { fetchNews, listForSMS } from './fetch.js';
import { gptFormatData } from './gpt.js';
import { Vonage } from '@vonage/server-sdk';

// ---API-------------------------------------------------------------

const vonage = new Vonage({
    apiKey: "keyHere",
    apiSecret: "secretHere"
});

const sendSMS = async () => {
    try {
        const formattedNews = await gptFormatData(); // Wait for the formatted news data
        if (!formattedNews) {
            console.error("No formatted news to send. Exiting...");
            return;
        }
        // Send SMS with the formatted data
        vonage.sms.send({
            to: 'numberHere',
            from: 'numberHere',
            text: formattedNews, // Use GPT's response as SMS content
        })

            // ---API RESPONSE & LOGS-------------------------------------------------------

            .then(resp => console.log('Message sent successfully:', resp))
            .catch(err => console.error('Message failed with error:', err));
    } catch (error) {
        console.error('An error occurred while sending the SMS:', error);
    }
};

sendSMS();