import React from 'react';
import InputBox from './InputBox.js';
import ToDoList from './ToDoList.js';

const App = () => {
    return (
        <div className="master container">
            <h1>My ToDoList App!</h1>
            <div>
                <InputBox />
            </div>
            <div>
                <ToDoList />
            </div>
        </div>
    );
};

export default App;