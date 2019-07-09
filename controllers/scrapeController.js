const axios = require("axios");
const cheerio = require("cheerio");
const Coin = require('../models/coin');

// Display Scrape create form on GET.
exports.scrape_create_get = function (req, res) {
    axios.get("https://coinmarketcap.com/all/views/all/").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        let $ = cheerio.load(response.data);

        // Now, we grab every tr within the #currencies table, and do the following:
        $("#currencies-all tbody tr").each(function (i, element) {
            // Save an empty result object
            let results = [];
            let result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.rank = $(this).children("td:nth-child(1)").text();
            result.coin = $(this).children("td:nth-child(2)").text();
            result.symbol = $(this).children("td:nth-child(3)").text();
            result.marketCap = $(this).children("td:nth-child(4)").text();
            result.price = $(this).children("td:nth-child(5)").text();
            // result.supply = $(this).children("td:nth-child(6)").text().replace(/\s*\*/g,'');
            result.volume = $(this).children("td:nth-child(7)").text();
            result.changeHour = $(this).children("td:nth-child(8)").text();
            result.changeDay = $(this).children("td:nth-child(9)").text();
            result.changeWeek = $(this).children("td:nth-child(10)").text();

            if (!results.coin != result.coin) {
                results.push(result);
            };

            // Create a new Coin using the `result` object built from scraping
            Coin.create(results)
                .then(function (dbCoin) {
                    // View the added result in the console
                    console.log(dbCoin);
                })
                .catch(function (err) {
                    // If an error occurred, log it
                    console.log(err);
                });
            // Set scrape batch limit to 100 and return
            return i < 99;
        });

        // Send a message to the client
        res.send("Scrape Complete");
    });
};