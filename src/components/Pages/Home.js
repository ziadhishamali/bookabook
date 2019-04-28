import React, { Component } from 'react';

class Home extends Component {
    today = new Date();
    time = this.today.toLocaleTimeString();
    state = {
        hours: (this.time.split(":"))[0],
        minutes: (this.time.split(":"))[1],
        seconds: (this.time.split(":"))[2].split(" ")[0],
        am: (this.time.split(":"))[2].split(" ")[1],
    };

    updateTime = () => {
        this.today = new Date();
        this.time = this.today.toLocaleTimeString();
        this.setState({
            hours: (this.time.split(":"))[0],
            minutes: (this.time.split(":"))[1],
            seconds: (this.time.split(":"))[2].split(" ")[0],
            am: (this.time.split(":"))[2].split(" ")[1],
        });
    };

    componentDidMount() {
        setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.updateTime);
    }

    render() {
        return (
            <div className="homePage">
                <p className="center mainPara">It's never late to read a <span className="orangePara">BOOK</span></p>
                <div className="center clock">
                    <span>{this.state.hours}</span>
                    <span className="splitting">:</span>
                    <span>{this.state.minutes}</span>
                    <span className="splitting">:</span>
                    <span>{this.state.seconds}</span>
                    <span className="hours">{this.state.am}</span>
                </div>
            </div>
        )
    }
}

export default Home