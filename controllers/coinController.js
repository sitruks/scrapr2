var Coin = require('../models/coin');

// Display list of all Coin.
exports.coin_list = function (req, res, next) {

    Coin.find()
        .sort([['rank', 'ascending']])
        .exec(function (err, list_coins) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('coin_list', { title: 'Coin List', list_coins: list_coins });
        });

};

// Display detail page for a specific Coin.
exports.coin_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Coin detail: ' + req.params.id);
};

// Display Coin create form on GET.
exports.coin_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Coin create GET');
};

// Handle Coin create on POST.
exports.coin_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Coin create POST');
};

// Display Coin delete form on GET.
exports.coin_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Coin delete GET');
};

// Handle Coin delete on POST.
exports.coin_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Coin delete POST');
};

// Display Coin update form on GET.
exports.coin_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Coin update GET');
};

// Handle Coin update on POST.
exports.coin_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Coin update POST');
};