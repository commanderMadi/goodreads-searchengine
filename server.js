const express = require('express');
const mongoose = require('mongoose');
const booksRouter = require('./routes/books');

mongoose.connect('mongodb://localhost:27017/goodreads', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));

app.use('/books', booksRouter);

app.listen(4040, () => {
    console.log('Listening on port 4040');
});
