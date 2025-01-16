import axios from 'axios';

const BEARER_TOKEN = 'tokenHere';

const query = 'philadelphia eagles'; // Replace with your search query

const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=5&tweet.fields=created_at,public_metrics`;

const config = {
    headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
    },
};

axios.get(url, config)
    .then(response => {
        console.log('Top Tweets:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
