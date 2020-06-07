import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import UserCreate from "./UserCreate";
import Checkers from './Checkers';




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            p1Name: "Juan",
            p2Name: "Marc",
            p1Score: 0,
            p2Score: 0,
            p1Color: "red",
            p2Color: "blue"
        }
        this.sendInfoToApp = this.sendInfoToApp.bind(this);
        this.sendScoreToApp = this.sendScoreToApp.bind(this);


    }

    sendScoreToApp(info) {
        console.log(info);
        if (info === this.state.p1Name) {
            this.setState({ p1Score: this.state.p1Score + 1 })
        }
        else if (info === this.state.p2Name) {
            this.setState({ p2Score: this.state.p2Score + 1 })
        }
    }

    sendInfoToApp(info) {
        console.log(info.p1Name)
        this.setState({
            p1Name: info.p1Name,
            p2Name: info.p2Name,
            p1Color: info.p1Color,
            p2Color: info.p2Color

        })
    }

    render() {
        if (this.state.p1Name == "") {
            var screen = < UserCreate fun={this.sendInfoToApp} />
        }// 
        else {
            screen = <Checkers fun={[this.state, this.sendScoreToApp]} />
        }

        return (
            <div>
                {screen}
            </div >



        )

    }
};

export default App;