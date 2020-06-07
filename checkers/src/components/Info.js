import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import UserCreate from "./UserCreate";
import Checkers from './Checkers';
import App from './App';




class Info extends React.Component {


    render() {

        return (
            <BrowserRouter>


                {/* <UserCreate fun={this.sendInfoToApp} />
                    <Checkers fun={this.state} /> */}
                <App />
                <div>
                    <Route path="/UserCreate" exact component={UserCreate}></Route>
                    <Route path="/Checkers" exact component={Checkers}></Route>
                </div>


            </BrowserRouter >



        )

    }
};

export default Info;


/*

                <BrowserRouter>
                    <div>
                        <Route path="/UserCreate" exact component={UserCreate}>CreateUser</Route>
                        <Route path="/Checkers" exact component={Checkers}>PlayCheckers</Route>
                    </div>
                </BrowserRouter>

*/