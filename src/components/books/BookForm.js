import React, { Component } from 'react';
import '../../styles/BookForm.css';
import { addBook } from '../../store/actions/bookActions';
import { connect } from 'react-redux';

class BookForm extends Component {
    state = { 
        title: "",
        author: "",
        description: "",
        price: "",
        image: "",
    }

    submit = (e) => {
        e.preventDefault();
        /*const keys = Object.keys(this.state);
        for (const key of keys) {
            if (this.state[key] === "") {
                alert('Seems like some informations about the book is missing');
                return;
            }
        }*/
        this.props.addBook(this.state);
    }

    changeText = (e) => {
        if (e.target.id === "image") {
            var files=e.target.files;
            var mimeType=files[0].type; // You can get the mime type
            if (mimeType.indexOf("image") === -1) {
                return;
            }
            let value = files[0];
            let state = {...this.state};
            state["imageFile"] = value;
            this.setState(state);
        }
        let value = e.target.value;
        let state = {...this.state};
        state[e.target.id] = value;
        this.setState(state);
    }

    render() { 
        return (
            <div className="sell">
                <form className="signin-form" onSubmit={e => this.submit(e)}>
                    <div><h1 className="large-text white-text berlin-font margin-top-2">SELL / LEND<span className="orange-text">.</span></h1></div>
                    <div><input id="title" className="input-text small-text white-text berlin-font trans-background margin-top-4" type="text" value={this.state.title} onChange={e => this.changeText(e)} placeholder="Book Title"/></div>
                    <div><input id="author" className="input-text small-text white-text berlin-font trans-background margin-top" type="text" value={this.state.author} onChange={e => this.changeText(e)} placeholder="Book Author"/></div>
                    <div><textarea id="description" className="input-text small-text white-text berlin-font trans-background margin-top" type="text" value={this.state.description} onChange={e => this.changeText(e)} placeholder="Book Description"/></div>
                    <div><input id="price" className="input-text small-text white-text berlin-font trans-background margin-top" type="number" value={this.state.price} onChange={e => this.changeText(e)} placeholder="Price"/></div>
                    <div><input id="image" className="input-text small-text white-text berlin-font trans-background margin-top" type="file" accept="image/*" value={this.state.image} onChange={e => this.changeText(e)}/></div>
                    <div><button type="button" className="submit-button button-orange small-text berlin-font margin-top-4 margin-bottom-2" onClick={e => this.submit(e)}>ADD BOOK</button></div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => dispatch(addBook(book))
    }
}

export default connect(null, mapDispatchToProps)(BookForm);