const axios = require("axios");
const cheerio = require("cheerio");
const Coin = require('../models/coin');
const results = [];
var existingCoin;
var existingSymbol;
var existingPrice;

// Display Scrape create form on GET.
exports.scrape_create_get = function (req, res) {
    const coinArr = [];
    const symbolArr = [];
    const priceArr = [];

    Coin.find({})
        .then(function (dbCoin) {
            for (var j = 0; j < dbCoin.length; j++) {
                coinArr.push(dbCoin[j].coin);
                symbolArr.push(dbCoin[j].price);
                priceArr.push(dbCoin[j].symbol);
            } console.log(`${coinArr} \n ${symbolArr} \n ${priceArr}`);
            axios.get("https://coinmarketcap.com/all/views/all/").then(function (response) {
                // Then, we load that into cheerio and save it to $ for a shorthand selector
                let $ = cheerio.load(response.data);

            // Now, we grab every tr within the #currencies table, and do the following:
            $("#currencies-all tbody tr").each(function (i, element) {
                // Save an empty result object
                let result = {};

                // Add the text and href of every link, and save them as properties of the result object
                result.rank = $(this).children("td:nth-child(1)").text();
                result.coin = $(this).children("td:nth-child(2)").text();
                existingCoin = coinArr.includes(result.coin);
                result.symbol = $(this).children("td:nth-child(3)").text();
                existingSymbol = symbolArr.includes(result.symbol);
                result.marketCap = $(this).children("td:nth-child(4)").text();
                result.price = $(this).children("td:nth-child(5)").text();
                existingPrice = priceArr.includes(result.price);
                // result.supply = $(this).children("td:nth-child(6)").text().replace(/\s*\*/g,'');
                result.volume = $(this).children("td:nth-child(7)").text();
                result.changeHour = $(this).children("td:nth-child(8)").text();
                result.changeDay = $(this).children("td:nth-child(9)").text();
                result.changeWeek = $(this).children("td:nth-child(10)").text();

                // if (!existingCoin && result.coin) {
                //     results.push(result);
                // };

                if (!existingCoin && !existingSymbol && !existingPrice && result.coin && result.symbol && result.price) {
                    results.push(result);
                };

                // Create a new Coin using the `result` object built from scraping
                Coin.create(result)
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
    });
};