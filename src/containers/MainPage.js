import React from 'react';
import SearchPage from './SearchPage';
import BookShelfs from '../components/BookShelfs';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../services/BooksAPI';


class MainPage extends React.Component {

    state = { books: [] };

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({ books }));
    };


    changeShelf = (changedBook, shelf) => {
        BooksAPI.update(changedBook, shelf).then((response) => {
            // set shelf for new or updated book
            changedBook.shelf = shelf;
            // update state with changed book
            this.setState(prevState => ({
                books: prevState.books
                    // remove updated book from array
                    .filter(book => book.id !== changedBook.id)
                    // add updated book to array
                    .concat(changedBook)
            }));
        });
    };


    render() {
        const { books } = this.state;
        return (
            <div className="app">
                <Route exact path="/" render={() => <BookShelfs books={books} changeShelf={this.changeShelf} />} />
                <Route path="/search" render={() => <SearchPage books={books} changeShelf={this.changeShelf} />} />
            </div>
        );
    }
}

export default MainPage;
