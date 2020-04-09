import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    today = new Date();
    time = this.today.toLocaleTimeString();
    state = {
        hours: (this.time.split(":"))[0],
        minutes: (this.time.split(":"))[1],
        seconds: (this.time.split(":"))[2].split(" ")[0],
        am: (this.time.split(":"))[2].split(" ")[1].toLowerCase(),
    };

    updateTime = () => {
        this.today = new Date();
        this.time = this.today.toLocaleTimeString();
        this.setState({
            hours: (this.time.split(":"))[0],
            minutes: (this.time.split(":"))[1],
            seconds: (this.time.split(":"))[2].split(" ")[0],
            am: (this.time.split(":"))[2].split(" ")[1].toLowerCase(),
        });
    };

    componentDidMount() {
        this.interval = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="homePage flex-column justify align">
                <span className="mainPara xlarge-text-vw white-text Forte-font lighter-weight">It's never late to read a <Link to="/buy" className="white-text Forte-font bolder-weight">BOOK</Link></span>
                <div className="clock box-shadow-2 xxlarge-text-vw white-text berlin-font margin-top-4">
                    <span>{this.state.hours}</span>
                    <span className="splitting">:</span>
                    <span>{this.state.minutes}</span>
                    <span className="splitting">:</span>
                    <span>{this.state.seconds}</span>
                    <span className="hours xlarge-text-vw">{this.state.am}</span>
                </div>
            </div>
        )
    }
}

/* 
<Link to="./buy" className="get-started margin-top-2 margin-bottom" >
                    <img src={img} alt="next"/>
                </Link>
*/

export default Home