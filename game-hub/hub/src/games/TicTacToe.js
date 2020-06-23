import React from 'react';
import $ from 'jquery';

import './TicTacToe.css';
import ScoreBoard from '../components/ScoreBoard';



class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values:
                [
                    ["13", true, 0], ["23", true, 0], ["33", true, 0],
                    ["12", true, 0], ["22", true, 0], ["32", true, 0],
                    ["11", true, 0], ["21", true, 0], ["31", true, 0]
                ],
            activePlayer: null,
            active: true
        }
    }
    componentDidMount() {
        this.setState({ activePlayer: this.props.fun[0].p1Name })
    }

    playerWon() {
        this.props.fun[1](this.state.activePlayer)
        alert(` ${this.state.activePlayer} Won! `)
        this.setState({ active: false })
    }

    checkWin() {
        const valuesCopy = this.state.values;
        if ( // CHECK ROWS FOR WIN
            (
                valuesCopy[0][2] === this.state.activePlayer &&
                valuesCopy[1][2] === this.state.activePlayer &&
                valuesCopy[2][2] === this.state.activePlayer
            ) ||
            (
                valuesCopy[3][2] === this.state.activePlayer &&
                valuesCopy[4][2] === this.state.activePlayer &&
                valuesCopy[5][2] === this.state.activePlayer
            ) ||
            (
                valuesCopy[6][2] === this.state.activePlayer &&
                valuesCopy[7][2] === this.state.activePlayer &&
                valuesCopy[8][2] === this.state.activePlayer
            )
        ) {
            this.playerWon();
        }
        else if ( // CHECK COLUMNS FOR WIN
            (
                valuesCopy[0][2] === this.state.activePlayer &&
                valuesCopy[3][2] === this.state.activePlayer &&
                valuesCopy[6][2] === this.state.activePlayer
            ) ||
            (
                valuesCopy[1][2] === this.state.activePlayer &&
                valuesCopy[4][2] === this.state.activePlayer &&
                valuesCopy[7][2] === this.state.activePlayer
            ) ||
            (
                valuesCopy[2][2] === this.state.activePlayer &&
                valuesCopy[5][2] === this.state.activePlayer &&
                valuesCopy[8][2] === this.state.activePlayer
            )
        ) {
            this.playerWon();
        }
        else if ( // CHECK DIAGONALS FOR WIN
            (
                valuesCopy[0][2] === this.state.activePlayer &&
                valuesCopy[4][2] === this.state.activePlayer &&
                valuesCopy[8][2] === this.state.activePlayer
            ) ||
            (
                valuesCopy[2][2] === this.state.activePlayer &&
                valuesCopy[4][2] === this.state.activePlayer &&
                valuesCopy[6][2] === this.state.activePlayer
            )
        ) {
            this.playerWon();
        }


    }

    changePlayer() {
        if (this.state.activePlayer === this.props.fun[0].p1Name) {
            this.setState({ activePlayer: this.props.fun[0].p2Name })
        }
        else {
            this.setState({ activePlayer: this.props.fun[0].p1Name })
        }
    }

    changeCellColor(eve) {
        if (this.state.activePlayer === this.props.fun[0].p1Name) {
            eve.target.style = "background-color: " + 'red';
        }
        else {
            eve.target.style = "background-color: " + 'blue';
        }
    }


    cellClick = (eve) => {
        if (this.state.active) {
            const clickID = eve.target.id;
            const valuesCopy = [...this.state.values];
            const player = this.state.activePlayer;

            for (let data in valuesCopy) {
                if (clickID === valuesCopy[data][0] && valuesCopy[data][1] !== false) {
                    valuesCopy[data][1] = false;
                    valuesCopy[data][2] = this.state.activePlayer;
                    this.changeCellColor(eve);
                    this.changePlayer();
                }
            }
            this.setState({ values: [...valuesCopy] });
            this.checkWin();

        }


    }
    resetGame = () => {
        this.setState({
            values:
                [
                    ["13", true, 0], ["23", true, 0], ["33", true, 0],
                    ["12", true, 0], ["22", true, 0], ["32", true, 0],
                    ["11", true, 0], ["21", true, 0], ["31", true, 0]
                ],
            activePlayer: this.props.fun[0].p1Name,
            active: true
        });
        $(".white").css("background-color", "white");
        $(".black").css("background-color", "black");
    }

    render() {
        return (
            <div id="background" className="ui background">

                <div className='scoreAndGameContainer'>
                    <div className="chessboard" onClick={this.cellClick}>
                        <div id="13" className="white cell"></div>
                        <div id="23" className="black cell"></div>
                        <div id="33" className="white cell"></div>

                        <div id="12" className="black cell"></div>
                        <div id="22" className="white cell"></div>
                        <div id="32" className="black cell"></div>

                        <div id="11" className="white cell"></div>
                        <div id="21" className="black cell"></div>
                        <div id="31" className="white cell"></div>
                    </div>
                    <br />
                    <button id='resetButton' className='ui command grey button' onClick={this.resetGame}>Reset</button>
                    <br />
                    <ScoreBoard fun={this.props} />
                </div>
            </div>
        );
    }
}


export default TicTacToe;