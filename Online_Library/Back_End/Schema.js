let mongoose = require('mongoose');

const BookScheme = new mongoose.Schema({
    booktitle: {
        type: String,
        required: true
    },
    PubYear: Number,
    author: String,
    Topic: String,
    formate: String
});

// (modelName, SchemaName, CollectionName)
module.exports = mongoose.model('bookmodel', BookScheme, 'BookCollection2');
