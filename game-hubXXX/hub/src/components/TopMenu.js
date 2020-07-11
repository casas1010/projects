import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';



function TopMenu(props) {

    const [buttonSelected, setButton] = useState('#userCreateButton');

    //Change which window is active
    const itemClick = (eve) => {
        const buttonId = '#' + eve.target.id;
        const buttonClass = eve.target.className.split(' '); // buttons className in a array
        
        if (buttonClass[0] != 'active' || buttonClass[1] != 'active' ) {
            $(buttonSelected).removeClass('active');
            $(buttonId).addClass('active');
            setButton(buttonId);
        }
    }
    return (
        <div className="ui tabular menu" >
            <Link id='userCreateButton' onClick={itemClick} to='/' className="active item">
                Playas & Scores
                </Link>
            <Link id='simonButton' onClick={itemClick} to='/games/simon' className="item">
                Simon
            </Link>
            <Link id='tictactoeButton' onClick={itemClick} to='/games/TicTacToe' className="item">
                TicTacToe
            </Link>

        </div>
    );
};

export default TopMenu;

//



