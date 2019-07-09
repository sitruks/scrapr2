var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema(
    {
        coin: { type: String },
        body: { type: String }
    }
);


// Export the Note model
module.exports = mongoose.model('Note', NoteSchema);