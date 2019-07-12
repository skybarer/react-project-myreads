import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import noCover from './../images/no-cover-image.png';

class Book extends React.Component {

  
    
    render() {
        const { book, books, changeShelf } = this.props;
        // add fallbacks for missing cover images and title
        const coverImg =
            book.imageLinks && book.imageLinks.thumbnail
                ? book.imageLinks.thumbnail
                : noCover;
        const title = book.title ? book.title : 'No title available';

       
        return (
           <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
                        <div className="book-shelf-changer">
                            <BookShelfChanger book={book} books={books} changeShelf={changeShelf} />
                            
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
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
