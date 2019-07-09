import React from 'react';
import { Link } from 'react-router-dom';
import BookShelfRow from './BookShelfRow';
// import PropTypes from 'prop-types';

class BookShelfs extends React.Component {

   
   
  
    render() {
        const { changeShelf, books } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookShelfRow books={books} changeShelf={changeShelf} />
                <div className="open-search">
                    <Link className="close-search" to="/search">
                        <button >Add a book</button>
                    </Link>
                   
                </div>
            </div>
        );
    }
}

BookShelfs.propTypes = {};

export default BookShelfs;
