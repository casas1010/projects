import React from 'react';
import './App.css';
import $ from 'jquery';

import PlayerTable from './PlayerTable';

class Simon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memoryArray: [],
            playerArray: [],
            playersTurn: 'Machine',
            playing: false

        }
    }

    makeRandomNumber = () => {
        return Math.floor(Math.random() * 4);
    }
    reset = () => {
        this.setState({
            playing: false,
            memoryArray: [],
            playersArray: []
        })
    }

    start = () => {
        // reset colors
        $(`#0`).css('background-color', 'red');
        $(`#1`).css('background-color', 'blue');
        $(`#2`).css('background-color', 'green');
        $(`#3`).css('background-color', 'yellow');
        $('#background').css('background-color', 'whitesmoke');
        $('#playButton').css('background-color', 'darkblue');
        $('#parentContainer').css('background-color', 'teal');

        //change properties
        $('#playButton').text('Reset')
        this.reset();
        this.setState({
            playing: true
        });

        this.robbotClick();
    }

    changePlayer() {
        if (this.state.playersTurn == 'Machine') {
            this.setState({ playersTurn: 'Human' })
        }
        else {
            this.setState({ playersTurn: 'Machine' })
        }

    }



    gameOver = () => {
        this.setState({ playing: false });

        setTimeout(() => {
            [0, 1, 2, 3].map((id, index) => {
                setTimeout(() => {
                    $(`#${id}`).css('background-color', 'black');
                }, 1000 * index);
            })
        }, 1000);

        setTimeout(() => {
            $('#parentContainer').css('background-color', 'black');
        }, 5000);

        setTimeout(() => {
            $('#background').css('background-color', 'black');
            $('#playButton').css('background-color', 'black');
        }, 6000);


        //


    }



    robbotClick() {

        this.setState({
            playing: false,
            playerArray: []
        });
        this.state.memoryArray.map((id, index) => {
            setTimeout(() => {

                let oricolor = $(`#${id}`).css('background-color');
                $(`#${id}`).css('background-color', 'grey');
                {
                    let eve2 = id;
                    setTimeout(
                        () => {
                            $(`#${eve2}`).css('background-color', oricolor);

                        }, 250
                    )
                }

            }, 1000 * index)
        });



        //show user new click cells
        setTimeout(() => {
            let randomIdNumber = this.makeRandomNumber();
            let oricolor = $(`#${randomIdNumber}`).css('background-color');
            $(`#${randomIdNumber}`).css('background-color', 'grey');
            {
                let eve2 = randomIdNumber;
                setTimeout(
                    () => { $(`#${eve2}`).css('background-color', oricolor); }, 250
                )
            }

            //input new click cell into array
            this.setState({ memoryArray: [...this.state.memoryArray, randomIdNumber] });
            this.changePlayer();
            this.setState({ playing: true });

        }, this.state.memoryArray.length * 1000);




    }

    buttonClick = (eve) => {
        if (this.state.playing) {
            // initial condition reset

            // flash cell
            let oricolor = $(`#${eve.target.id}`).css('background-color');
            $(`#${eve.target.id}`).css('background-color', 'grey');
            {
                let eve2 = eve.target.id;
                setTimeout(
                    () => {
                        this.setState({ playPause: false });
                        $(`#${eve2}`).css('background-color', oricolor);
                    }, 250
                )
            }

            // add cell to player array
            this.setState({ playerArray: [...this.state.playerArray, eve.target.id] })


            // check win
            let playerArray = [...this.state.playerArray, eve.target.id]
            let playerArrayLength = playerArray.length;
            let memoryArray = this.state.memoryArray;
            let memoryArrayLenght = memoryArray.length;


            for (let i = 0; i < playerArrayLength; i++) {
                if (playerArray[i] != memoryArray[i]) {
                    console.log('WRONG')
                    this.gameOver();
                }
                else if (playerArray[i] == memoryArray[i]) {
                    console.log('CORRECT')
                }
                if (playerArrayLength == memoryArrayLenght) {
                    setTimeout(
                        () => { this.robbotClick() }, 500
                    )
                    console.log('all correct!');
                    break;

                }
            }
        }
    }



    render() {
        return (
            <div id='background'>
                <div id='parentContainer'>
                    <div id='0' onClick={this.buttonClick} className='red button'></div>
                    <div id='1' onClick={this.buttonClick} className='blue button'></div>
                    <br></br>
                    <div id='2' onClick={this.buttonClick} className='green button'></div>
                    <div id='3' onClick={this.buttonClick} className='yellow button'></div>
                    <br></br>

                    <button id='playButton' className='ui command black button' onClick={this.start}>Start</button>

                    <br />
                    {`Level: ${this.state.memoryArray.length}`}
                    <br />
                    {'playing: ' + this.state.playing}


                </div>

            </div>
        );
    }
};


export default Simon;

