# World Today, On 1 Page

<img width="1280" alt="news" src="https://github.com/user-attachments/assets/b114006c-32c3-4f3d-bd19-50a57a97b739" />

**World Today** is a JavaScript-based application designed to keep users informed with top news headlines, summarized insights, and trending topics. With integrations for OpenAI's GPT and Vonage APIs, this project offers a seamless way to stay updated via a web interface and daily SMS summaries.

## Features

- **Top News Headlines**
  - Fetches the top 10 news stories of the day and renders them on a single-page HTML view.
  - Data fetched from [NewsAPI](https://newsapi.org/).

- **AI-Powered Summaries**
  - Uses OpenAI's GPT API to condense news stories into concise, straight-to-the-point summaries.

- **Daily SMS Updates**
  - Sends a morning SMS summarizing the prior day's news highlights using the Vonage API.

- **Twitter Trend Insights**
  - Provides real-time insights into what people are saying on Twitter about selected topics.

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- APIs:
  - [NewsAPI](https://newsapi.org/) for news data
  - [OpenAI](https://openai.com/) for summaries
  - [Vonage](https://www.vonage.com/) for SMS
  - [Twitter API](https://developer.twitter.com/en/docs) for tweet analysis

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adamchain/js-project-planner.git
   cd js-project-planner
