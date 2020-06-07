import React from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions/';
class InputBox extends React.Component {

    sendToStore = () => {
        if (this.refs.input.value !== '') {
            this.props.addToList(this.refs.input.value)
            this.refs.input.value = '';
        }


    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter' && this.refs.input.value !== '') {
            this.sendToStore();
        }
    }


    render() {
        return (
            <div>
                <input ref="input" onKeyPress={this.handleKeyPress} />
                <button onClick={this.sendToStore}>Add to List</button>
            </div>

        )
    }

}


export default connect(null, { addToList })(InputBox);