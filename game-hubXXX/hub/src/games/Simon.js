import React from 'react';
import './Simon.css';
import $ from 'jquery';

import ScoreBoard from '../components/ScoreBoard';


class Simon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memoryArray: [],
            playerArray: [],
            playersTurn: 'Machine',
            playing: false,
            activePlayer: null,

        }
    }

    componentDidMount() {
        this.setState({ activePlayer: this.props.fun[0].p1Name })
    }

    makeRandomNumber = () => {
        return Math.floor(Math.random() * 4);
    }
    reset = () => {
        //$('#playButton').text(`Start as ${this.state.activePlayer}`)
        this.setState({
            playing: false,
            memoryArray: [],
            playersArray: []
        })
    }
    changeActivePlayer = () => {
        // console.log('this.state.memoryArray.length: '+this.state.memoryArray.length);
        // console.log('this.state.activePlayer: '+this.state.activePlayer);
        if (this.state.memoryArray.length == 0) {
            if (this.props.fun[0].p1Name == this.state.activePlayer) {
                this.setState({ activePlayer: this.props.fun[0].p2Name })
            }
            else {
                this.setState({ activePlayer: this.props.fun[0].p1Name })

            }
        }

        else {
            alert('You are only allowed to change players at Level:0')
        }


    }

    start = () => {
        if (this.state.memoryArray.length == 0) {
            // reset colors
            $(`#0`).css('background-color', 'red');
            $(`#1`).css('background-color', 'blue');
            $(`#2`).css('background-color', 'green');
            $(`#3`).css('background-color', 'yellow');
            $('#background').css('background-color', 'whitesmoke');
            $('#playButton').css('background-color', 'black');
            $('#gameContainer').css('background-color', 'teal');

            //change properties
            //$('#playButton').text(this.state.activePlayer + ' playing')
            this.reset();
            this.setState({
                playing: true
            });

            this.robbotClick()
        }
        else {
            alert('You must be at level 0 for this button to work!')
        }

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
            $('#gameContainer').css('background-color', 'black');
        }, 5000);

        setTimeout(() => {
            $('#background').css('background-color', 'black');
            $('#playButton').css('background-color', 'black');
        }, 6000);
    }


    // computers click
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

        // animation shows user new click cells
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

    // animation for user button click
    buttonClick = (eve) => {
        if (this.state.playing) {

            // flash cell selected
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

            // check win      NOTE: I was unable to create a check win function at the time
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
        {if(this.state.memoryArray!=0){
            $('#playButton').hide();
        }else{
            $('#playButton').show();

        }
        }
        return (
            <div id='background'>
                <div className='scoreAndGameContainer'>
                    <div id='gameContainer'>
                        <div id='0' onClick={this.buttonClick} className='red button'></div>
                        <div id='1' onClick={this.buttonClick} className='blue button'></div>
                        <br />
                        <div id='2' onClick={this.buttonClick} className='green button'></div>
                        <div id='3' onClick={this.buttonClick} className='yellow button'></div>
                        <br />
                        <br />
                        <button id='playButton' className='ui command grey button' onClick={this.start}>Start</button>
                        <button id='resetButton' className='ui command grey button' onClick={this.reset}>Reset</button>
                        <button id='changePlayerButton' className='ui command grey button' onClick={this.changeActivePlayer}>Change Playa</button>
                        <br />
                        <br />
                        <div id='gameInfo'>
                            <h3 id='level' className=''>{`Level: ${this.state.memoryArray.length}`}</h3>
                            <h3 id='activePlayer' className='' >{`Active Playa: ${this.state.activePlayer}`}</h3>
                        </div>
                        <br />
                    </div>
                    <ScoreBoard fun={this.props} />
                </div>
            </div>
        );
    }
};


export default Simon;

