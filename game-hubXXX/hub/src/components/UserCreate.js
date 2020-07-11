import React from 'react';
import axios from 'axios';
import $ from 'jquery';


import users from '../apis/users';
import UsersList from './UsersList';

import "./UserCreate.css";


class UserCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            p1Name: "",
            p2Name: "",
            responseUsers: null,
            responseGames: null,
            usersList: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        const responseUsers = await axios.get(`http://localhost:3001/users`);
        const responseGames = await axios.get(`http://localhost:3001/games`);
        this.setState(
            {
                responseUsers: responseUsers,
                responseGames: responseGames
            });
        const usersArray = [];

        this.state.responseUsers.data.map((person) => {
            usersArray.push(person.Name);
            //console.log(person.Name); // does not have a null!
        })
        this.setState({ usersList: usersArray });

        //console.log(usersArray);
        usersArray.map((user) => {
            $('#tableInsert').after(
                `<tr>
                <td id='user-${user}'>${user}</td>
                <td id='p1-${user}'>Play as player 1</td>
                <td id='p2-${user}'>Play as player 2</td>
                </tr>
                `
            );

        })

    }

    tableClick = (eve) => {
        console.log(eve.target.id);
    }


    handleChange(event) {
        const fieldName = event.target.name;
        switch (fieldName) {
            case 'p1Name':
                this.setState({ p1Name: event.target.value });
                break;
            case 'p2Name':
                this.setState({ p2Name: event.target.value });
                break;
            case 'p1Color':
                this.setState({ p1Color: event.target.value });
                break;
            case 'p2Color':
                this.setState({ p2Color: event.target.value });
                break;
            default:
                alert('something new')
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.p1Name == "") {
            this.setState({ p1Name: "Player 1", p2Name: "Player 2" })
        }
        this.props.fun(this.state);
        //console.log(this.props);
    }


    render() {


        return (

            <div className="master container ui center aligned">

                <div className="twin parent container">

                    <h2 className="ui center aligned icon header">
                        <i className="circular users icon"></i>
                                Amigos play games here
                    </h2>
                    <form>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Player 1 Name
                                    </div>
                            <input type="text" name="p1Name" placeholder="enter name" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Player 2 Name
                                    </div>
                            <input type="text" name="p2Name" placeholder="enter email" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <br />
                        <div onClick={this.handleSubmit}>Submit</div>
                    </form>
                    {/* <UsersList fun={this.state.responseUsers}/> */}
                    {/* {console.log(this.state.responseUsers)} */}
                    <table id='table' onClick={this.tableClick} className="ui celled table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Player 1?</th>
                                <th>Player 2?</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr id='tableInsert'></tr>
                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
};




export default UserCreate;


{/* <div onClick={this.handleSubmit}>
                            <Link to="/Checkers" >
                                Submit
                            </Link>

                        </div> */}