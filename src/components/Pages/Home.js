import React, { Component } from 'react';

class Home extends Component {
    today = new Date();
    state = {
        hours: this.today.getHours(),
        minutes: this.today.getMinutes(),
        seconds: this.today.getSeconds()
    };

    render() {
        return (
            <div className="homePage">
                <p className="center mainPara">It's never late to read a book</p>
                <div className="center clock">
                    <span className="hours">{this.state.hours}</span>
                    <span className="splitting">:</span>
                    <span className="hours">{this.state.minutes}</span>
                    <span className="splitting">:</span>
                    <span className="hours">{this.state.seconds}</span>
                </div>
            </div>
        )
    }
}

export default Home