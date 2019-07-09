import React from 'react';
// import PropTypes from 'prop-types';
const moveTo = [
    {
        "id": 1,
        "label": "Move to...",
        "value": "move",
        "disabled": true
    },
    {
        "id": 2,
        "label": "Currently Reading",
        "value": "currentlyReading",
        "disabled": false
    },
    {
        "id": 3,
        "label": "Want to Read",
        "value": "wantToRead",
        "disabled": false
    },
    {
        "id": 4,
        "label": "Read",
        "value": "read",
        "disabled": false
    },
    {
        "id": 5,
        "label": "None",
        "value": "none",
        "disabled": false
    }
];
class BookShelfChanger extends React.Component {

    updateShelf = (event) => {
       this.props.changeShelf(this.props.book, event.target.value);
    }

    render() {
        const { book, books } = this.props;
       

        // set current shelf to none as default
        let currentShelf = 'none';

        // if book is in current list, set current shelf to book.shelf
        for (let item of books) {
            if (item.id === book.id) {
                currentShelf = item.shelf;
                break;
            }
        }
      
        return (
            <select onChange={this.updateShelf} defaultValue={currentShelf}>
                {
                    moveTo.map((option) => (
                        <option key={option.id} value={option.value} disabled={option.disabled}>{option.label}</option>
                    ))
                }
            </select>
        );
    }
}

BookShelfChanger.propTypes = {};

export default BookShelfChanger;
