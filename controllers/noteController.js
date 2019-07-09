var Coin = require('../models/coin');
var Note = require('../models/note');

// Display list of all Note.
exports.note_list = function (req, res, next) {

    Note.find()
        .sort([['coin', 'ascending']])
        .exec(function (err, list_notes) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('note_list', { title: 'Note List', note_list: list_notes });
        });

};

// Display detail page for a specific Note.
exports.note_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Note detail: ' + req.params.id);
};

// Display Note create form on GET.
exports.note_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Note create GET');
};

// Handle Note create on POST.
exports.note_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Note create POST');
};

// Display Note delete form on GET.
exports.note_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Note delete GET');
};

// Handle Note delete on POST.
exports.note_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Note delete POST');
};

// Display Note update form on GET.
exports.note_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Note update GET');
};

// Handle Note update on POST.
exports.note_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Note update POST');
};