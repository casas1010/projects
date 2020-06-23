import React from 'react';
import Simon from './Simon';

function PlayerTable(props) {
    return (
        <div class="ui grid">
            <div class="four wide column">
                <div class="ui vertical fluid tabular menu">

                    <a class="item">
                        Playas & Scores
                    </a>
                    <a class="item active">
                        Simon
                    </a>
                    <a class="item">
                        Checkers
                    </a>
                    <a class="item">
                        Chess
                    </a>
                </div>
            </div>
            <div class="twelve wide stretched column">
                <div class="ui segment">
                    <Simon />
                </div>
            </div>
        </div>
    );
};

export default PlayerTable;



// <a class="item">
// Playas & Scores
// </a>