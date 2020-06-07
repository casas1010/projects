import React from 'react';
import './Checkers.css';
import $ from 'jquery';



class Checkers extends React.Component {
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
        console.log(this.props);
        console.log('props');
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
            eve.target.style = "background-color: " + this.props.fun[0].p1Color;
        }
        else {
            eve.target.style = "background-color: " + this.props.fun[0].p2Color;
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
            <div id="CheckersBackground" className="ui background">
                <div>
                    <div id="DisplayInfo">
                        <table className="ui celled table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Score</th>
                                    <th>Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.fun[0].p1Name}</td>
                                    <td>{this.props.fun[0].p1Score}</td>
                                    <td>{this.props.fun[0].p1Color}</td>
                                </tr>
                                <tr>
                                    <td>{this.props.fun[0].p2Name}</td>
                                    <td>{this.props.fun[0].p2Score}</td>
                                    <td>{this.props.fun[0].p2Color}</td>
                                </tr>
                            </tbody>
                        </table>

                        <br />
                        <div>Active player: {this.state.activePlayer}</div>
                        <button onClick={this.resetGame}>Reset Game</button>
                    </div>

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

                </div>
            </div>
        );
    }
}


export default Checkers;