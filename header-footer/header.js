// Select the headerDiv element
const headerDiv = document.getElementById('headerDiv');

// Create a new header element
const newHeader = document.createElement('header');

// Populate the header's innerHTML with the desired content
newHeader.innerHTML = `
    <header class="header">
        <h1>Sticky Header</h1>
        <nav class="navigation">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="#html">HTML</a></li>
                <li><a href="#css">CSS</a></li>
                <li><a href="#js">JavaScript</a></li>
            </ul>
        </nav>
    </header>
`;

// Append the new header to the headerDiv
headerDiv.appendChild(newHeader);
