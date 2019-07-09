import React from 'react';
import BookList from '../components/BookList';
import * as BooksAPI from '../services/BooksAPI';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component {

    state = {
        query: '',
        books:[],
        newBooks: [],
        searchErr: false
    }

    getBooks = event => {
        const query = event.target.value;
        this.setState({ query });

        // if user input => run the search
        if (query) {
            BooksAPI.search(query.trim(), 20).then(books => {
                books.length > 0
                    ? this.setState({ newBooks: books, searchErr: false })
                    : this.setState({ newBooks: [], searchErr: true });
            });

            // if query is empty => reset state to default
        } else this.setState({ newBooks: [], searchErr: false });
    };


    render() {
        const { query,  newBooks, searchErr } = this.state;
        const { changeShelf, books } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                         value={query} onChange={this.getBooks}/>
                    </div>
                </div>
                <div className="search-books-results">
                      
                        {newBooks.length > 0 && (
                            <div>
                            <h3>Search returned {newBooks.length} books </h3>
                                <ol className="books-grid">
                                <BookList shelfBooks={newBooks} books={books} changeShelf={changeShelf} />
                                </ol>
                            </div>
                        )}
                        {searchErr && (
                            <h3>No books found. Please try with other keywords!</h3>
                        )}
                </div>
            </div>
        );
    }
}

SearchPage.propTypes = {
};

export default SearchPage;
