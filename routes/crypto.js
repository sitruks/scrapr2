var express = require('express');
var router = express.Router();

// Require controller modules.
var coin_controller = require('../controllers/coinController');
var scrape_controller = require('../controllers/scrapeController');
var note_controller = require('../controllers/noteController');

/// HOME ROUTE ///

// GET catalog home page.
// router.get('/', coin_controller.index);


/// SCRAPER ROUTES ///

// GET request for creating a Scraper. NOTE This must come before route that displays Scraper (uses id).
router.get('/scrape', scrape_controller.scrape_create_get);

/// COIN ROUTES ///

// GET request for creating a Coin. NOTE This must come before route that displays Coin (uses id).
router.get('/coin/create', coin_controller.coin_create_get);

// POST request for creating Coin. 
router.post('/coin/create', coin_controller.coin_create_post);

// GET request to delete Coin.
router.get('/coin/:id/delete', coin_controller.coin_delete_get);

// POST request to delete Coin.
router.post('/coin/:id/delete', coin_controller.coin_delete_post);

// GET request to update Coin.
router.get('/coin/:id/update', coin_controller.coin_update_get);

// POST request to update Coin.
router.post('/coin/:id/update', coin_controller.coin_update_post);

// GET request for one Coin.
router.get('/coin/:id', coin_controller.coin_detail);

// GET request for list of all Coin.
router.get('/saved', coin_controller.coin_list);

/// NOTE ROUTES ///

// GET request for creating a Scraper. NOTE This must come before route that displays Note (uses id).
router.get('/note/create', note_controller.note_create_get);

// POST request for creating Note. 
router.post('/note/create', note_controller.note_create_post);

// GET request to delete Note.
router.get('/note/:id/delete', note_controller.note_delete_get);

// POST request to delete Note.
router.post('/note/:id/delete', note_controller.note_delete_post);

// GET request to update Note.
router.get('/note/:id/update', note_controller.note_update_get);

// POST request to update Note.
router.post('/note/:id/update', note_controller.note_update_post);

// GET request for one Note.
router.get('/note/:id', note_controller.note_detail);

// GET request for list of all Note.
router.get('/notes', note_controller.note_list);

module.exports = router;