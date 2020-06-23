import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TopMenu from './TopMenu';
import Simon from '../games/Simon';
import UserCreate from './UserCreate';
import TicTacToe from '../games/TicTacToe';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            p1Name: "Juan",
            p2Name: "Marc",
            p1Score: 0,
            p2Score: 0,
        }
        this.sendInfoToApp = this.sendInfoToApp.bind(this);
        this.sendScoreToApp = this.sendScoreToApp.bind(this);
    }

    // async componentDidMount() {
    //     const responseUsers = await axios.get(`http://localhost:3001/users`);
    //     const responseGames = await axios.get(`http://localhost:3001/games`);
    //     this.setState(
    //         {
    //             responseUsers: responseUsers,
    //             responseGames: responseGames
    //         });
    //     const usersArray = [];

    //     this.state.responseUsers.data.map((person) => {
    //         usersArray.push(person.Name);
    //         //console.log(person.Name); // does not have a null!
    //     })
    //     this.setState({ usersList: usersArray });

    //     //console.log(usersArray);
    //     usersArray.map((user) => {
    //         $('#tableInsert').after(
    //             `<tr>
    //             <td id='user-${user}'>${user}</td>
    //             <td id='p1-${user}'>Play as player 1</td>
    //             <td id='p2-${user}'>Play as player 2</td>
    //             </tr>
    //             `
    //         );

    //     })

    // }

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
        this.setState({
            p1Name: info.p1Name,
            p2Name: info.p2Name
        })
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <TopMenu />
                    <Route path='/games/simon' exact component={() => <Simon fun={[this.state, this.sendScoreToApp]} />} className="item" />
                    <Route path='/' exact component={() => <UserCreate fun={this.sendInfoToApp} />} className="item" />
                    <Route path='/games/TicTacToe' exact component={() => <TicTacToe fun={[this.state, this.sendScoreToApp]} />} className="item" />
                </BrowserRouter>

            </div>

        );

    }
};

export default App;
