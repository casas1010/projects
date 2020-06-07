import React from 'react';
import ChessGame from './ChessGame';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            p1Name: "",
            p2Name: "",
            p1Email: "",
            p2Email: ""
        }
        this.sendInfoToApp = this.sendInfoToApp.bind(this);

    }
    sendInfoToApp(info) {
        //console.log(info);    
    }

    render() {
        return (

            <div>
                {/* <UserCreate fun={this.sendInfoToApp} /> */}
                <ChessGame />
            </div>



        )

    }
};

export default App;


{/* <div>
<BrowserRouter>
    <div>
        <UserCreate fun={this.sendInfoToApp} />
        <Link to path="/ChessGame">ChessGame</Link>
        <Route path="/ChessGame" exact component={ChessGame} />
    </div>
</BrowserRouter>
</div> */}