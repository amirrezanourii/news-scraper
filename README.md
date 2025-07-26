<h1>📰 Hacker News Scraper</h1>

This is a simple Node.js script designed to scrape the latest news articles from Hacker News ([news.ycombinator.com](https://news.ycombinator.com)) and save the extracted data into a JSON file.

## ✨ Features

- **Scrapes Titles and URLs:** Extracts the title and corresponding URL for each news article on the Hacker News front page.
- **Relative URL Handling:** Automatically converts relative URLs to absolute URLs to ensure all links are fully functional.
- **Console Logging:** Provides clear console output during the scraping process, including the number of articles found and the save location.
- **JSON Output:** Saves the scraped data into a well-formatted JSON file (`news_articles.json`) in a specified directory.
- **Error Handling:** Includes basic error handling for network requests and scraping failures.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** [Download and Install Node.js](https://nodejs.org/) (which includes npm).

### Installation

#### Clone the repository (or create the files manually):

```sh
git clone <your-repository-url>
cd <your-repository-directory>
```

If you just have the `.js` file, create a new directory, place your `scraper.js` file inside it, and then proceed.

#### Create package.json

In your project directory, create a `package.json` file if you don't have one. You can generate a basic one by running:

```sh
npm init -y
```

#### Install Dependencies

This project uses `axios` for making HTTP requests and `cheerio` for parsing HTML. Install them using npm:

```sh
npm install axios cheerio
```

#### Create the titles directory

The script saves the output JSON file into a `titles` directory relative to the script's location. Create this directory:

```sh
mkdir titles
```

## Usage

To run the scraper, simply execute the script using Node.js from your project's root directory:

```sh
node src/scraper.js
```


Output
After successful execution, you will see console output indicating the progress and the location of the saved file. A file named news_articles.json will be created inside the titles directory (e.g., your-project-directory/titles/news_articles.json).
The news_articles.json file will contain an array of objects, each representing a news article, with title and url properties, like this:
[
  {
    "title": "Example Article Title 1",
    "url": "https://example.com/article1"
  },
  {
    "title": "Another Interesting Read",
    "url": "https://anothersite.org/article2"
  }
]


🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See LICENSE for more information.
