// ---VARIABLES---------------------------------------------------------

const API_KEY = 'API_KEY_HERE';
export const listForSMS = [];
export const listForWeb = [];

// ---DATE--------------------------------------------------------------

const currentDate = new Date();
const formattedCurrentDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);
const formattedDateYesterday = `${dateYesterday.getFullYear()}-${String(dateYesterday.getMonth() + 1).padStart(2, '0')}-${String(dateYesterday.getDate()).padStart(2, '0')}`;

// ---API---------------------------------------------------------------

const url = `https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&page_size=4&from=${formattedDateYesterday}&to=${formattedCurrentDate}&apiKey=${API_KEY}`;

// ---FETCH---------------------------------------------------------------

export async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'ok') {
            throw new Error(`API Error: ${data.message}`);
        }

        // Populate `listForSMS` and `listForWeb`
        data.articles.forEach(({ title, description, url, urlToImage, source: { name: sourceName }, author }) => {
            // For SMS Previews
            if (title) {
                listForSMS.push(description);
            }

            // For Website
            if (title && description && url && urlToImage && sourceName && author) {
                listForWeb.push({
                    title,
                    description,
                    url,
                    urlToImage,
                    sourceName,
                    author,
                });
            }
        });

        if (listForSMS.length === 0) {
            console.warn('No articles found for the given date range.');
        }
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}

// ---END--------------------------------------------------------------
