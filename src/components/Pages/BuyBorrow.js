import React, { Component } from 'react';
import Books from '../books/Books';
import arrow from '../../images/icons/next.svg';
import Details from '../layout/Details';
import $ from 'jquery';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { changeFilter, searchBook } from '../../store/actions/bookActions';

class BuyBorrow extends Component { 
    state = {
        bookShown: null,
        search: "",
        filterOption: "Newest",
        filterState: false,
        filters: {
            'Newest': ['addedAt', 'desc'],
            'Oldest': ['addedAt', 'asc'],
            'Name: A-Z': ['title', 'asc'],
            'Name: Z-A': ['title', 'desc'],
            'Price: LOW-HIGH': ['price', 'asc'],
            'Price: HIGH-LOW': ['price', 'desc']
        },
        addedBy: {},
    };

    showBook = (id) => {
        document.getElementById('details').style.visibility = "visible";
        document.getElementById('details').style.opacity = "1";
        this.setState({bookShown: id});
    };

    hideBook = () => {
        document.getElementById('details').style.visibility = "hidden";
        document.getElementById('details').style.opacity = "0";
    };

    changeText = (e) => {
        let state = {...this.state};
        state[e.target.id] = e.target.value;
        this.setState(state);
        this.props.searchBook(e.target.value);
    }

    changeFilterState = () => {
        this.setState({filterState: !this.state.filterState});
    }

    componentDidMount() {
        // first time filtering books
        this.props.changeFilter(this.state.filters[this.state.filterOption]);

        
    }

    componentDidUpdate() {
        // add onClick action listener for each filter option
        $('.drop-down-item').on('click', (e) => {
            let state = {...this.state};
            state["filterOption"] = e.target.innerText;
            state["filterState"] = !this.state.filterState;
            this.props.changeFilter(this.state.filters[e.target.innerText]);
            this.setState(state);
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.books === this.props.books) return;

        // add onClick action listener for each filter option
        $('.drop-down-item').on('click', (e) => {
            let state = {...this.state};
            state["filterOption"] = e.target.innerText;
            state["filterState"] = !this.state.filterState;
            this.props.changeFilter(this.state.filters[e.target.innerText]);
            this.setState(state);
        });
    }

    filter = () => {
        if (this.state.filterState) {
            const temp = (
                <div className="drop-down-menu box-shadow-2">
                    <div className="drop-down-item">Newest</div>
                    <div className="drop-down-item">Oldest</div>
                    <div className="drop-down-item">Name: A-Z</div>
                    <div className="drop-down-item">Name: Z-A</div>
                    <div className="drop-down-item">Price: LOW-HIGH</div>
                    <div className="drop-down-item">Price: HIGH-LOW</div>
                </div>
            )

            return (
                temp
            )
        }
        return (
            <span></span>
        )
    }

    getRadius = () => {
        if (this.state.filterState) {
            return " radius-bottom-no";
        }
        return ""
    }

    getArrow = () => {
        if (this.state.filterState) {
            return " arrow-down-up";
        }
        return ""
    }

    getDetails = () => {
        if (this.state.bookShown !== null) {
            return (
                <Details book={this.props.books.filter((book) => {return book.id === this.state.bookShown})[0]} usersData={this.props.usersData} hideBook={this.hideBook}/>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return (
            <div className="buyborrowpage">
                <div className="flex-column align justify align-text xlarge-text-vw white-text Forte-font margin-top-5">
                    {/*<span>Get yourself a book to read</span>*/}
                    <div className="flex-row justify align margin-top">
                        <div>
                            <div className={"box-shadow-2 filter-drop flex-column justify align align-text margin-left margin-right margin-bottom" + this.getRadius()} onClick={() => this.changeFilterState()}>
                                <div className="flex-row title-filter align medium-text berlin-font align-text all-width">
                                    <div className="third-width flex-row justify-start"><span>{this.state.filterOption}</span></div>
                                    <div className="half-width flex-row justify-end"><img className={"arrow-down margin-left" + this.getArrow()} src={arrow} alt="down"/></div>
                                </div>
                            </div>
                            {this.filter()}
                        </div>
                        <input id="search" className="box-shadow-2 search-box small-text black-text berlin-font white-background-trans-2 margin-bottom" type="text" value={this.state.search} onChange={e => this.changeText(e)} placeholder="Search for a book"/>
                    </div>
                </div>
                <div id="card-container" className="row margin-bottom">
                    { this.state.search.length < 1 ? <Books books={this.props.books} showBook={this.showBook}/> : <Books books={this.props.searchedBooks} showBook={this.showBook}/>}
                </div>
                <div className="details" id="details">
                    {this.getDetails()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // maps the books list from the bookReducer to the props
    return {
        books: state.book.books,
        searchedBooks: state.book.searchedBooks,
        usersData: state.book.usersData,
    }
}

const mapDispatchToProps = (dispatch) => {
    // maps the changeFilter dispatch from the bookReducer to the props
    return {
        changeFilter: (filterOption) => dispatch(changeFilter(filterOption)),
        searchBook: (book) => dispatch(searchBook(book))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(BuyBorrow);