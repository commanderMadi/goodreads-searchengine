const express = require('express');

const router = express.Router();

const Book = require('../models/book');

router.get('/:bookTitle', async (req, res) => {
    const { bookTitle } = req.params;
    console.log(bookTitle);
    const pattern = new RegExp(`.*${bookTitle}.*`, 'i');
    console.log(pattern);
    const book = await Book.find({
        title: pattern,
    })
        .sort('title')
        .select('title authors average_rating');

    res.send(book);
    return book;
});

module.exports = router;
