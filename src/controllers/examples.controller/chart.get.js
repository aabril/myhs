const axios = require('axios');

/**
 * GET /example/chart
 * Chart example.
 */
async function getChart (req, res, next) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${process.env.ALPHA_VANTAGE_KEY}`;

  axios.get(url)
    .then((response) => {
      const arr = response.data['Time Series (Daily)'];
      let dates = [];
      let closing = []; // stock closing value
      const keys = Object.getOwnPropertyNames(arr);
      for (let i = 0; i < 100; i++) {
        dates.push(keys[i]);
        closing.push(arr[keys[i]]['4. close']);
      }
      // reverse so dates appear from left to right
      dates.reverse();
      closing.reverse();/example/
      dates = JSON.stringify(dates);
      closing = JSON.stringify(closing);
      res.render('original/example/chart', {
        title: 'Chart',
        dates,
        closing
      });
    }).catch((err) => {
      next(err);
    });
};

module.exports = getChart

