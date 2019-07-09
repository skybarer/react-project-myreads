import React from 'react';
import Book from './Book';
// import PropTypes from 'prop-types';

class BooksList extends React.Component {
    render() {
        const { shelfBooks ,books, changeShelf } = this.props;
        return (
            shelfBooks.map((book) => (<Book key={book.id} book={book} books={books} changeShelf={changeShelf} />))
        );
    }
}

BooksList.propTypes = {};

export default BooksList;
