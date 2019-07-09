import React from 'react';
// import PropTypes from 'prop-types';
import BooksList from '../components/BookList';


class BookShelfRow extends React.Component {

    render() {
        const { books, changeShelf } = this.props;
        const shelfTypes = [
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' }
        ];

        return (
            <div className="list-books-content">
               
                    {shelfTypes.map((shelf, index) => {
                        const shelfBooks = books.filter(book => book.shelf === shelf.type);
                        return (
                            <div key={index}>
                                <div className="bookshelf" >
                                    <h2 className="bookshelf-title">{shelf.title}</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <BooksList shelfBooks={shelfBooks} books={books} changeShelf={changeShelf} />
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
           
            </div>
        );
    }
}

BookShelfRow.propTypes = {};

export default BookShelfRow;
