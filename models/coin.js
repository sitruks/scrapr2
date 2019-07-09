var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CoinSchema = new Schema(
    {
        rank: { type: Number, required: true },
        coin: { type: String, required: true },
        symbol: { type: String, required: true },
        marketCap: { type: String, required: true },
        price: { type: String, locale: "en_US", numericOrdering: true, required: true },
        // supply: { type: Number, required: true },
        volume: { type: String, required: true },
        changeHour: { type: String, required: true },
        changeDay: { type: String, required: true },
        changeWeek: { type: String, required: true },
        note: { type: Schema.Types.ObjectId, ref: "Note" },
    }
);

// // Virtual for article's URL
// CoinSchema
//     .virtual('url')
//     .get(function () {
//         return '/home/scrapes/' + this._id;
//     });

// // Virtual for article's title
// CoinSchema
//     .virtual('title')
//     .get(function () {
//         return this.title;
//     });

//Export model
module.exports = mongoose.model('Coin', CoinSchema);