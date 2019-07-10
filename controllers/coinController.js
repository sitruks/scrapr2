var Coin = require('../models/coin');

// Display list of all Coin.
exports.coin_list = function (req, res, next) {

    Coin.find({})
        .then(function (dbCoin) {
            console.log(dbCoin);
            res.render("saved", {
                saved: dbCoin
            });
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });

};

// Display detail page for a specific Coin.
exports.coin_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin detail: ' + req.params.id);
};

// Display Coin create form on GET.
exports.coin_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin create GET');
};

// Handle Coin create on POST.
exports.coin_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin create POST');
};

// Display Coin delete form on GET.
exports.coin_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin delete GET');
};

// Handle Coin delete on POST.
exports.coin_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin delete POST');
};

// Display Coin update form on GET.
exports.coin_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin update GET');
};

// Handle Coin update on POST.
exports.coin_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin update POST');
};