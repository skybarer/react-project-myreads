import React from 'react';
import BookShelfChanger from './BookShelfChanger';


class Book extends React.Component {
    
    render() {
        const { book, books, changeShelf } = this.props;
        return (
           <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <BookShelfChanger book={book} books={books} changeShelf={changeShelf} />
                            
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {
                        book.authors &&
                        book.authors.map((author, index) => (
                            <div className="book-authors" key={index}>
                                {author}
                            </div>
                        ))
                    }
                </div>
           </li>

        );
    }
}

Book.propTypes = {};

export default Book;
