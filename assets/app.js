const searchForm = document.getElementById('search');
const searchFormInput = document.getElementById('search_book');
const searchResultsContainer = document.getElementById(
    'search_results_container'
);

const getBook = async (url) => {
    const data = await fetch(url);

    try {
        const books = await data.json();
        searchResultsContainer.innerHTML = '';
        for (let book of books) {
            const bookDetailsEl = document.createElement('div');
            bookDetailsEl.classList.add('book_details_container');
            const titleEl = document.createElement('div');
            titleEl.innerHTML = `<span class="label book_title">Title: </span>${book.title}`;
            const authorsEl = document.createElement('div');
            authorsEl.innerHTML = `<span class="label authors">Authors: </span>${book.authors}`;
            const averageRatingEl = document.createElement('div');
            averageRatingEl.innerHTML = `<span class="label rating">Average Rating: </span>${book.average_rating}`;
            bookDetailsEl.appendChild(titleEl);
            bookDetailsEl.appendChild(authorsEl);
            bookDetailsEl.appendChild(averageRatingEl);
            searchResultsContainer.appendChild(bookDetailsEl);
        }
    } catch (err) {
        console.log(err);
    }
};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getBook(`/books/${search_book.value}`);
});
