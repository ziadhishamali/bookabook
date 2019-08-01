import React from 'react';

let options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
};

const Details = ({ book, hideBook }) => {
    return (
        <div className="details-container">
            <button className="button-close" onClick={() => {hideBook()}}>X</button>
            <div className="book-info flex-column align justify">
                <img className="details-image" src={book.image} alt="book"/>
                <p className="orange-text berlin-font bold-weight large-text margin-bottom-2">{book.title}</p>
                <p className="black-text berlin-font">Author: <span className="blue-text">{book.author}</span></p>
                <p className="black-text berlin-font">Added By: <span className="blue-text">{book.addedBy}</span></p>
                <p className="black-text berlin-font">Added At: <span className="blue-text">{book.addedAt.toDate().toLocaleString('en-us', options)}</span></p>
                <p className="black-text berlin-font">Price: <span className="blue-text">{book.price + " LE"}</span></p><br/>
            </div>
            <div className="flex-column book-description justify-start align margin-top-2">
                <p className="gray-text berlin-font margin-bottom-2 align-text">{book.description}</p>
            </div>
        </div>
    )
};

export default Details