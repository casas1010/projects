import React from 'react';
import { removeFromList } from '../actions'
import { connect } from 'react-redux';


class Todo extends React.Component {

    render() {

        return (
            <div>
                <button onClick={ ()=>{this.props.removeFromList(this.props.ele)}} >Complete!</button>{this.props.ele}
            </div>
            )
    }
};


export default connect(null, { removeFromList })(Todo);



