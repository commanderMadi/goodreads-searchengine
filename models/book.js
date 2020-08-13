const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: String,
        required: true,
    },
    num_pages: {
        type: Number,
        required: true,
    },
    average_rating: {
        type: Number,
        required: true,
        max: 5,
    },
});

const Book = new mongoose.model('Book', bookSchema);

module.exports = Book;
