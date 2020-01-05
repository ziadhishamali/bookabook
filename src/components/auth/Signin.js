import React, {Component} from 'react';
import '../../styles/Signin.css';
import { signin } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class Signin extends Component {
    state = { 
        email: "",
        password: ""
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

        await this.props.signin(this.state);
        if (this.props.user && localStorage.getItem('uid') !== undefined && localStorage.getItem('uid') !== null) {
            this.props.history.push('/bookabook/');
        }
        // authentication
        /*const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
        promise.catch(error => console.log(error));*/
    }

    render() { 
        return ( 
            <div className="signin">
                <form className="signin-form" onSubmit={e => this.submit(e)}>
                    <h1 className="large-text white-text berlin-font margin-top-2">SIGN IN<span className="orange-text">.</span></h1>
                    <input className="input-text small-text white-text berlin-font trans-background margin-top-4" type="text" value={this.state.email} onChange={e => this.changeEmail(e)} placeholder="email address"/>
                    <input className="input-text small-text white-text berlin-font trans-background margin-top" type="password" value={this.state.password} onChange={e => this.changePassword(e)} placeholder="password"/>
                    <button className="submit-button small-text berlin-font margin-top-2">LOG IN</button>
                    <button type="button" className="submit-button button-orange small-text berlin-font margin-top-4 margin-bottom-2" onClick={() => {this.props.history.push('./signup')}}>SIGN UP</button>
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
        signin: (user) => dispatch(signin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);