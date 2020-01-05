import React from 'react'
import Loader from '../layout/Loader';
import { NavLink } from "react-router-dom";

const Books = ({ books, showBook }) => {

    let booksList;
    if (books !== undefined) {
        booksList = books.length ? ( books.map(book => {
            return (
                <div key={book.id} className="card flex-column justify-start align white-background-trans box-shadow margin-top-- margin-bottom--"  onClick={() => {showBook(book.id)}}>
                    <div className="card-image flex-column justify align waves-effect waves-block waves-light">
                        <img src={book.image} alt="book"/>
                    </div>
                    <div className="card-title flex-column justify align">
                        <span className="titleBook orange-text berlin-font bold-weight">{book.title}</span>
                    </div>
                    <div className="card-content flex-column justify align">
                        <span className="card-description berlin-font">
                            {book.description}
                        </span>
                    </div>
                    <NavLink to={"buy/" + book.id} className="card-action berlin-font flex-row justify align">
                        Buy/Borrow
                    </NavLink>
                </div>
            )
        })) : (
            <div className="large-text-vw no-books blue-text Forte-font">Oooops!! We can't find any books</div>
        )
    } else if (books === undefined) {
        booksList = (
            <Loader />
        )
    }

    /*const booksList = books.length ? (
        books.map(book => {
            return (
                <div key={book.id} className="card flex-column justify-start align white-background-trans box-shadow margin-top-- margin-bottom--"  onClick={() => {showBook(book.id)}}>
                    <div className="card-image flex-column justify align waves-effect waves-block waves-light">
                        <img src={book.img} alt="book"/>
                    </div>
                    <div className="card-title flex-column justify align">
                        <span className="titleBook orange-text berlin-font bold-weight">{book.title}</span>
                    </div>
                    <div className="card-content flex-column justify align">
                        <span className="card-description berlin-font">
                            {book.description}
                        </span>
                    </div>
                    <a href={"buy/" + book.id} className="card-action berlin-font flex-row justify align">
                        Buy/Borrow
                    </a>
                </div>
            )
        })
    ) : (
        <div className="large-text-vw no-books blue-text Forte-font">Oooops!! We can't find any books</div>
    );*/

    return (
        <div className="flex-row justify align">
            {booksList}
        </div>
    )

};

export default Books

/*

Notice the use of %PUBLIC_URL% in the tags above.
It will be replaced with the URL of the `public` folder during the build.
Only files inside the `public` folder can be referenced from the HTML.

Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
work correctly both with client-side routing and a non-root public URL.
Learn how to configure a non-root public URL by running `npm run build`.

*/