import React, { Component } from 'react';
import '../../styles/CheckOut.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Loader from '../layout/Loader';
import { ChangeGetUsers } from '../../store/actions/bookActions';

class Checkout extends Component {

    state = {
        number: "",
        email: "",
        showNumber: false,
        showEmail: false,
        loading: true,
        firstLoad: true,
    }

    changeNumberState = () => {
        this.setState({showNumber: !this.state.showNumber});
    }

    changeEmailState = () => {
        this.setState({showEmail: !this.state.showEmail});
    }

    getNumber = () => {
        if (this.state.showNumber) {
            return this.state.number;
        } else {
            return ""
        }
    }

    getEmail = () => {
        if (this.state.showEmail) {
            return this.state.email;
        } else {
            return ""
        }
    }

    componentDidMount() {
        const { user } = this.props;
        if (user === undefined) {
            while (!confirm("you need to login first")) {
            }
            this.props.history.push('/signin');
        } else {
            this.setState({ loading: false});
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.books !== this.props.books) {
            this.props.ChangeGetUsers(newProps.books);
        }
    }

    render() {
        if (this.state.loading) {
            return <Loader />
        }
        const id = this.props.match.params.buy_id;

        let book = undefined;
        if (this.props.books !== undefined) {
            book = (
                this.props.books.filter(item => {
                    return JSON.stringify(item.id) === JSON.stringify(id)
                })[0]
            )
        }

        let name = book !== undefined && this.props.usersData !== undefined ? this.props.usersData[book.addedBy].name : "";
        let number = book !== undefined && this.state.showNumber && this.props.usersData !== undefined ? this.props.usersData[book.addedBy].phone || "No phone number is available" : "";
        let email = book !== undefined && this.state.showEmail && this.props.usersData !== undefined ? this.props.usersData[book.addedBy].email || "No email address is available" : "";

        if (book === undefined) {
            return (
                <Loader />
            )
        }
        
        let options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };

        return (
            <div className="checkout flex-row justify align">
                <div className="details-container">
                    <div className="book-info flex-column align justify">
                        <img className="details-image" src={book.image} alt="book"/>
                        <p className="orange-text berlin-font bold-weight large-text margin-bottom-2">{book.title}</p>
                    </div>
                    <div className="flex-column book-description justify-start align">
                        <p className="gray-text berlin-font margin-bottom-2 align-text">{book.description}</p>
                        <p className="black-text berlin-font margin-top-4">Author: <span className="blue-text">{book.author}</span></p>
                        <p className="black-text berlin-font">Added By: <span className="blue-text">{name}</span></p>
                        <p className="black-text berlin-font">Added At: <span className="blue-text">{book.addedAt.toDate().toLocaleString('en-us', options)}</span></p>
                        <p className="black-text berlin-font">Price: <span className="blue-text">{book.price + " LE"}</span></p><br/>
                        <div className="flex-column justify align">
                            <button type="button" className="submit-button button-orange small-text berlin-font margin-left-2 margin-right-2 margin-top-4" onClick={() => {this.changeNumberState()}}>Show Number</button>
                            <span className="margin-top--- blue-text Forte-font large-text">{number}</span>
                            <button type="button" className="submit-button button-orange small-text berlin-font margin-left-2 margin-right-2 margin-top" onClick={() => {this.changeEmailState()}}>Show Email</button>
                            <span className="margin-top--- blue-text Forte-font large-text">{email}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.firestore.ordered.books,
        usersData: state.book.usersData,
    }
}

const mapDispatchToProps = (dispatch) => {
    // maps the changeFilter dispatch from the bookReducer to the props
    return {
        ChangeGetUsers: (books) => dispatch(ChangeGetUsers(books))
    }
}
 
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(['books'])
)(Checkout);

/*
<div className="homePage flex-column justify align">
                    <span className="xlarge-text-vw Forte-font white-text">ERROR!! 404 PAGE NOT FOUND</span>
                </div>
*/