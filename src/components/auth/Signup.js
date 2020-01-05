import React, {Component} from 'react';
//import {auth} from './firebase';
//import { LogContext } from '../../contexts/LogContext';
import { signup } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class Signup extends Component {
    state = { 
        firstName: "",
        lastName: "",
        imageUrl: "",
        email: "",
        password: ""
    }

    //static contextType = LogContext;

    changeFirst = (e) => {
        this.setState({firstName: e.target.value});
    }

    changeLast = (e) => {
        this.setState({lastName: e.target.value});
    }

    changeEmail = (e) => {
        this.setState({email: e.target.value});
    }

    changePassword = (e) => {
        this.setState({password: e.target.value});
    }

    submit = async(e) => {
        e.preventDefault();
        console.log(this.state);

        await this.props.signup(this.state);
        if (this.props.user && localStorage.getItem('uid') !== undefined && localStorage.getItem('uid') !== null) {
            this.props.history.push('/bookabook/');
        }
        //const { setFirstName, setLastName } = this.context;

        // authentication
        /*const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        promise.catch(error => {console.log(error);return;});

        setFirstName(this.state.firstName);
        setLastName(this.state.lastName);*/
    }

    render() { 
        return ( 
            <div className="signin">
                <form className="signin-form" onSubmit={e => this.submit(e)}>
                    <h1 className="large-text white-text berlin-font margin-top-2">SIGN UP<span className="orange-text">.</span></h1>
                    <div>
                        <input className="input-text text-name small-text white-text berlin-font trans-background margin-top-4 margin-right" type="text" value={this.state.firstName} onChange={e => this.changeFirst(e)} placeholder="first name"/>
                        <input className="input-text text-name small-text white-text berlin-font trans-background margin-top" type="text" value={this.state.lastName} onChange={e => this.changeLast(e)} placeholder="last name"/>
                    </div>
                    <input className="input-text small-text white-text berlin-font trans-background margin-top" type="text" value={this.state.email} onChange={e => this.changeEmail(e)} placeholder="email"/>
                    <input className="input-text small-text white-text berlin-font trans-background margin-top" type="password" value={this.state.password} onChange={e => this.changePassword(e)} placeholder="password"/>
                    <button className="submit-button small-text berlin-font margin-top-2">SIGN UP</button>
                    <button type="button" className="submit-button button-orange small-text berlin-font margin-top-4 margin-bottom-2" onClick={() => {this.props.history.push('./signin')}}>SIGN IN</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // maps the books list from the bookReducer to the props
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);