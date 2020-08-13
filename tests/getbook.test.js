const dbHandler = require('./dbhandle');
const bookModel = require('../models/book');

const testBook = {
    title: 'Test book is here',
    authors: 'Ahmed Magdy',
    num_pages: 650,
    average_rating: 4.95,
};

let bookId;

const createBook = async () => {
    const book = await bookModel.create(testBook);
    bookId = book.id;
};

beforeAll(async () => {
    await dbHandler.connect();
});

beforeEach(async () => {
    await createBook();
});

afterEach(async () => {
    await dbHandler.clearDatabase();
});

afterAll(async () => {
    await dbHandler.closeDatabase();
});

describe('get the book ', () => {
    it('should retrieve correct book if the title matches or the id matches', async () => {
        const foundBook = await bookModel.findById(bookId);
        expect(foundBook.id).toBe('1234');
        expect(foundBook.title).toBe(testBook.title);
    });
});
