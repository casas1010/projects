import React from 'react';
import "./UserCreate.css";
import { Link } from 'react-router-dom';

class UserCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            p1Name: "",
            p2Name: "",
            p1Color: "",
            p2Color: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.p1Name==""){
            this.setState({p1Name:"Player 1",p2Name:"Player 2"})
        }
        this.props.fun(this.state);
    }
    

    render() {
        return (
            <div className="master container ui center aligned">
                <div className="twin parent container">
                    <h2 className="ui center aligned icon header">
                        <i className="circular users icon"></i>
                            Friends play Chess
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
                                Player 1 Email
                                    </div>
                            <input type="text" name="p1Color" placeholder="enter name" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <br />
                        <div className="ui labeled input">
                            <div className="ui label">
                                Player 2 Name
                                    </div>
                            <input type="text" name="p2Name" placeholder="enter email" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div className="ui labeled input">
                            <div className="ui label">
                                PLayer 2 Name
                                    </div>
                            <input type="text" name="p2Color" placeholder="enter email" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <br />
                        <input type="submit" onClick={this.handleSubmit}>Submit</input>
                        {/* <div onClick={this.handleSubmit}>
                            <Link to="/Checkers" >
                                Submit
                            </Link>

                        </div> */}






                    </form>
                </div>

            </div>
        )
    }
};




export default UserCreate;