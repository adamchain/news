import { fetchNews, listForWeb } from './fetch.js';

async function renderNews() {
    // Fetch news data
    await fetchNews();

    // Select the DOM element
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = ''; // Clear existing content

    // Render each article
    listForWeb.forEach(({ title, description, url, urlToImage, sourceName, author }) => {
        const listItem = document.createElement('div');
        listItem.className = 'news-item'; // Add class for styling
        listItem.innerHTML = `
            <li>
                <h3>${title}</h3>
                <img class="news-image" src="${urlToImage}" alt="${title}">
                <p>${description}</p>
                <p><strong>Source:</strong> ${sourceName}</p>
                <a href="${url}" target="_blank">
                Read more <i class="fa-solid fa-arrow-right"></i>
            </a>
            </li>
        `;
        newsList.appendChild(listItem);
    });
}

// Render the news when the page loads
//renderNews();
