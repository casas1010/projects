import React from 'react';
import { connect } from 'react-redux';
import { removeFromList } from '../actions';
import Todo from './Todo';


class ToDoList extends React.Component {
    renderHelper = () => {        
        return this.props.reducer.map(element => {
            return (
                <Todo key={element} ele={element} />
            )
        })
    }

    render() {
        return (
            <div>{this.renderHelper()}</div >
        );
    }
}

const mapStateToProps = (state) => {
    return { reducer: state.reducer }
}
export default connect(mapStateToProps, { removeFromList })(ToDoList);
