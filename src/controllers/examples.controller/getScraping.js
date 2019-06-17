const request = require('request');
const cheerio = require('cheerio');

/**
 * GET /example/scraping
 * Web scraping example using Cheerio library.
 */
function getScraping (req, res, next) {
    request.get('https://news.ycombinator.com/', (err, request, body) => {
      if (err) { return next(err); }
      const $ = cheerio.load(body);
      const links = [];
      $('.title a[href^="http"], a[href^="https"]').slice(1).each((index, element) => {
        links.push($(element));
      });
      res.render('original/example/scraping', {
        title: 'Web Scraping',
        links
      });
    });
  };

module.exports = getScraping

