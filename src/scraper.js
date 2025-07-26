
// News Scraper for Hacker News
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

/**
 * Scrapes news articles from a specified URL.
 * @param {string} url - The URL of the news website to scrape.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of news article objects.
 */
async function scrapeNews(url) {
    try {
        console.log(`Fetching content from: ${url}`);
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const articles = [];
        $('tr.submission').each((_, element) => {
            const titleElement = $(element).find('td.title > span > a');
            const title = titleElement.text().trim();
            const url = titleElement.attr('href');
            if (title && url) {
                articles.push({
                    title,
                    url: url.startsWith('http') ? url : new URL(url, response.config.url).href
                });
            }
        });
        console.log(`Found ${articles.length} articles.`);
        return articles;
    } catch (error) {
        console.error(`Error scraping news: ${error.message}`);
        if (error.response) {
            console.error(`Status: ${error.response.status}`);
            console.error(`Headers: ${JSON.stringify(error.response.headers)}`);
            console.error(`Data: ${error.response.data}`);
        }
        return [];
    }
}

async function main() {
    const targetUrl = 'https://news.ycombinator.com/';
    console.log(`Starting scraper for: ${targetUrl}`);
    const newsArticles = await scrapeNews(targetUrl);

    if (newsArticles.length > 0) {
        console.log('\n--- Scraped News Articles ---');
        newsArticles.forEach((article, index) => {
            console.log(`\nArticle ${index + 1}:`);
            console.log(`Title: ${article.title}`);
            console.log(`URL: ${article.url}`);
        });

        // Save the data to a JSON file in the titles directory
        const outputFileName = path.join(__dirname, '../titles/news_articles.json');
        fs.writeFileSync(outputFileName, JSON.stringify(newsArticles, null, 2));
        console.log(`\nScraped data saved to ${outputFileName}`);
    } else {
        console.error('No articles were scraped. Please check the URL and selectors.');
    }
}


main();