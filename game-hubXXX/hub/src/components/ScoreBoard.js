import React from 'react';
import './ScoreBoard.css';

function ScoreBoard(props) {
    return (
        <div id="DisplayInfo">

            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.fun.fun[0].p1Name}</td>
                        <td>{props.fun.fun[0].p1Score}</td>
                        
                    </tr>
                    <tr>
                        <td>{props.fun.fun[0].p2Name}</td>
                        <td>{props.fun.fun[0].p2Score}</td>
                        
                    </tr>
                </tbody>
            </table>

            <br />
            {/* <div>Active player: {this.state.activePlayer}</div> */}
        </div>
    );
}

export default ScoreBoard;