import React from 'react';
import './ChessGame.css';
import $ from 'jquery';




//                  <img className="image" id="i18" src="https://www.quickprogrammingtips.com/wp-content/uploads/2019/12/chessboard.png" alt="chessboard in javascript"></img> 
// for (var cell in divArray) {
//     var cellID = divArray[cell].props.id;
//     var cellElement = divArray[cell].props;
//     //console.log(clickID);
//     if (clickID.slice(1) == cellID.slice(1)) {
//         clickElement.style = "border-style: double;"
//     }
// }


var blackpawn = <img id="ipa" className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="pawn" />;
var whitepawn = <img id="ipa" className="image" src="https://img.icons8.com/windows/32/000000/pawn.png" />


class ChessGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickArr: [],
            clickCount: 0

            // [id]
        }

        this.elementClick = this.elementClick.bind(this);
    }

    // get location of element clicked
    elementLocation = (eve) => {

        var clickID = eve.target.id;
        if (clickID[0] === 'i') {
            const elementYPosition = eve.target.style.cssText.split(' ')[1].substring(0, eve.target.style.cssText.split(' ')[1].length - 3); // get x position
            const elementXPosition = eve.target.style.cssText.split(' ')[3].substring(0, eve.target.style.cssText.split(' ')[3].length - 3); // get y position
            return [elementXPosition, elementYPosition];
        }
        else {
            var elementXPosition = (parseInt(clickID[1]) - 1) * 50;
            var elementYPosition = (8 - clickID[2]) * 50;
            return [elementXPosition, elementYPosition];
        }
    }

    // determine what moves it can make based on id

    colorIndicator = (evE) => {
        let indicator;
        if (evE == 'w') {
            indicator = -1;
        } else if (evE == 'b') {
            indicator = 1;
        }

        return indicator;
    }

    moveAllowed = (eve) => {
        const clickID = eve.target.id;
        const clickIDArray = clickID.split('-');

        // split id into array components
        // The clickIDArray contains the following data :  elementType - Chesstype - number - player 
        //  example:    id="i-pa-01-b"   

        // 0 typeType:
        // 1 typeChess:
        // 2 number within the type
        // 3 black/white:
        const ImageOrChess = clickIDArray[0];
        const typeChessPiece = clickIDArray[1];
        const chessPieceNumber = clickIDArray[2];
        const indicatorBW = this.colorIndicator(clickIDArray[3]);
        const elementLocation = this.elementLocation(eve); //get x and y position
        const elementXLocation = elementLocation[0];
        const elementYLocation = elementLocation[1];
        console.log('elementLocation: ' + elementLocation);

        // add the moves cordinates to the array moveArr, then return it
        let moveArr = [];
        switch (typeChessPiece) {
            case ('pa'): // pawn movements

                if (indicatorBW === 1) { //black
                    if (elementYLocation === '50') { // initial location conditions, has two moves
                        moveArr =
                            [
                                [elementXLocation, parseInt(elementYLocation) + 50],
                                [elementXLocation, parseInt(elementYLocation) + 100]
                            ];
                    }
                    else {

                        moveArr = [elementXLocation, 50 + parseInt(elementYLocation)];
                    }
                }

                else if (indicatorBW === -1) { // white
                    if (elementYLocation === '300') { // initial location conditions
                        moveArr =
                            [
                                [elementXLocation, parseInt(elementYLocation) - 50],
                                [elementXLocation, parseInt(elementYLocation) - 100]
                            ];
                    }
                    else {
                        moveArr = [elementXLocation, parseInt(elementYLocation) - 50];
                    }
                }
                break;

            case ('br'): //tower
                {
                    // find down total moves
                    let yLocation = parseInt(elementYLocation);
                    //take number and add 50
                    // add number to array
                    // check while loop, repeat
                    while (yLocation < 350) {
                        yLocation = yLocation + 50;
                        moveArr.push([elementXLocation, yLocation]);
                        console.log('down position: ' + [elementXLocation, yLocation])
                    }

                    // find up total moves
                    yLocation = parseInt(elementYLocation);
                    //take number and substract 50
                    // add number to array
                    // check while loop, repeat
                    while (yLocation > 0) {
                        yLocation = yLocation - 50;
                        moveArr.push([elementXLocation, yLocation]);
                        console.log('up position: ' + [elementXLocation, yLocation])
                    }

                    // find left total moves
                    let xLocation = parseInt(elementXLocation);
                    //take number and substract 50
                    // add number to array
                    // check while loop, repeat
                    while (xLocation > 0) {
                        xLocation = xLocation - 50;
                        moveArr.push([xLocation, elementYLocation]);
                        console.log('left position: ' + [xLocation, elementYLocation])
                    }

                    // find right total moves
                    xLocation = parseInt(elementXLocation);
                    //take number and add 50
                    // add number to array
                    // check while loop, repeat
                    while (xLocation < 350) {
                        xLocation = xLocation + 50;
                        moveArr.push([xLocation, elementYLocation]);
                        console.log('right position: ' + [xLocation, elementYLocation])
                    }
                }
                break;

            case ('kn'):  // horse knight
                {
                    let yLocation = parseInt(elementYLocation);
                    let xLocation = parseInt(elementXLocation);

                    // 2 x,y actions being done here
                    // add number to array
                    // check while loop, repeat

                    // find down movemenets
                    moveArr.push([xLocation - 50, yLocation - 100]);
                    console.log('down position: '+[xLocation - 50, yLocation - 100]);
                    moveArr.push([xLocation + 50, yLocation - 100]);
                    console.log('down position: '+[xLocation + 50, yLocation - 100]);


                    yLocation = parseInt(elementYLocation);
                    xLocation = parseInt(elementXLocation);

                    // find left movemenets
                    moveArr.push([xLocation - 100, yLocation - 50]);
                    console.log('left position: '+[xLocation - 100, yLocation - 50]);
                    moveArr.push([xLocation - 100, yLocation + 50]);
                    console.log('left position: '+[xLocation - 100, yLocation + 50]);

                }



        }





        //console.log('moveArr: ' + moveArr);
        // numbers are being returned, not strings
        return moveArr;

    }


    elementClick = (eve) => {
        //var clickElement = eve.target;
        var clickID = eve.target.id;
        var elementLocation = this.elementLocation(eve); //get x and y position
        const moveAllowed = this.moveAllowed(eve);
        //console.log(moveAllowed);





        //second click
        if (this.state.clickArr.length == 2) {// gets location of first and second click
            let imgID = this.state.clickArr[0];
            let newlocation = this.state.clickArr[1];
            $(`#${imgID}`).css('left', newlocation[0]);
            $(`#${imgID}`).css('top', newlocation[1]);
            $('#' + imgID).css('border-style', 'none'); // reset the color
            this.setState({ clickArr: [] })
        }

        // first click
        else if (clickID[0] == 'i' && this.state.clickArr.length == 0) {
            $('#' + clickID).css('border-style', 'double');
            this.setState({
                clickArr: [clickID]
            })

        }
        else if (clickID[0] == 'c' && this.state.clickArr.length == 1) {

            const arrEle = this.state.clickArr;

            this.setState({
                clickArr: [...arrEle, elementLocation]
            })

        }





    }




    render() {


        return (
            <div onClick={this.elementClick} style={this.state.style}>
                {/*     elementType - Chesstype - number - player */}
                <img id="i-pa-01-b" style={{ 'top': '50px', 'left': '0px' }} className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="bpawn" />
                <img id="i-pa-02-b" style={{ 'top': '50px', 'left': '50px' }} className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="bpawn" />
                <img id="i-pa-03-b" style={{ 'top': '50px', 'left': '100px' }} className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="bpawn" />
                <img id="i-pa-04-b" style={{ 'top': '50px', 'left': '150px' }} className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="bpawn" />
                <img id="i-pa-05-b" style={{ 'top': '50px', 'left': '200px' }} className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="bpawn" />
                <img id="i-pa-06-b" style={{ 'top': '50px', 'left': '250px' }} className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="bpawn" />
                <img id="i-pa-07-b" style={{ 'top': '50px', 'left': '300px' }} className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="bpawn" />
                <img id="i-pa-08-b" style={{ 'top': '50px', 'left': '350px' }} className="image" src="https://img.icons8.com/android/24/000000/pawn.png" alt="bpawn" />

                <img id="i-pa-01-w" style={{ 'top': '300px', 'left': '0px' }} className="image" src="https://img.icons8.com/windows/32/000000/pawn.png" alt="wpawn" />
                <img id="i-pa-02-w" style={{ 'top': '300px', 'left': '50px' }} className="image" src="https://img.icons8.com/windows/32/000000/pawn.png" alt="wpawn" />
                <img id="i-pa-03-w" style={{ 'top': '300px', 'left': '100px' }} className="image" src="https://img.icons8.com/windows/32/000000/pawn.png" alt="wpawn" />
                <img id="i-pa-04-w" style={{ 'top': '300px', 'left': '150px' }} className="image" src="https://img.icons8.com/windows/32/000000/pawn.png" alt="wpawn" />
                <img id="i-pa-05-w" style={{ 'top': '300px', 'left': '200px' }} className="image" src="https://img.icons8.com/windows/32/000000/pawn.png" alt="wpawn" />
                <img id="i-pa-06-w" style={{ 'top': '300px', 'left': '250px' }} className="image" src="https://img.icons8.com/windows/32/000000/pawn.png" alt="wpawn" />
                <img id="i-pa-07-w" style={{ 'top': '300px', 'left': '300px' }} className="image" src="https://img.icons8.com/windows/32/000000/pawn.png" alt="wpawn" />
                <img id="i-pa-08-w" style={{ 'top': '300px', 'left': '350px' }} className="image" alt="wpawn" src="https://img.icons8.com/windows/32/000000/pawn.png" />


                <img id="i-br-01-b" style={{ 'top': '00px', 'left': '350px' }} className="image" alt="brook" src="https://img.icons8.com/ios-filled/100/000000/rook.png" />
                <img id="i-br-02-b" style={{ 'top': '00px', 'left': '0px' }} className="image" alt="brook" src="https://img.icons8.com/ios-filled/100/000000/rook.png" />
                <img id="i-kn-01-b" style={{ 'top': '00px', 'left': '50px' }} className="image" alt="bknight" src="https://img.icons8.com/clouds/100/000000/knight.png" />
                <img id="i-kn-02-b" style={{ 'top': '00px', 'left': '300px' }} className="image" alt="bknight" src="https://img.icons8.com/clouds/100/000000/knight.png" />
                <img id="i-kn-01-b" style={{ 'top': '350px', 'left': '250px' }} className="image" alt="walfil" src="https://www.iconspng.com/images/white-silhouette-chess-piece-remix-bishop-alfil/white-silhouette-chess-piece-remix-bishop-alfil.jpg" />
                <img id="i-kn-01-b" style={{ 'top': '350px', 'left': '250px' }} className="image" alt="walfil" src="https://www.iconspng.com/images/white-silhouette-chess-piece-remix-bishop-alfil/white-silhouette-chess-piece-remix-bishop-alfil.jpg" />

                <div className="chessboard" >
                    <div id="c18" className="white cell"></div>
                    <div id="c28" className="black cell"></div>
                    <div id="c38" className="white cell"></div>
                    <div id="c48" className="black cell"></div>
                    <div id="c58" className="white cell"></div>
                    <div id="c68" className="black cell"></div>
                    <div id="c78" className="white cell"></div>
                    <div id="c88" className="black cell"></div>
                    <div id="c17" className="black cell"></div>
                    <div id="c27" className="white cell"></div>
                    <div id="c37" className="black cell"></div>
                    <div id="c47" className="white cell"></div>
                    <div id="c57" className="black cell"></div>
                    <div id="c67" className="white cell"></div>
                    <div id="c77" className="black cell"></div>
                    <div id="c87" className="white cell"></div>
                    <div id="c16" className="white cell"></div>
                    <div id="c26" className="black cell"></div>
                    <div id="c36" className="white cell"></div>
                    <div id="c46" className="black cell"></div>
                    <div id="c56" className="white cell"></div>
                    <div id="c66" className="black cell"></div>
                    <div id="c76" className="white cell"></div>
                    <div id="c86" className="black cell"></div>
                    <div id="c15" className="black cell"></div>
                    <div id="c25" className="white cell"></div>
                    <div id="c35" className="black cell"></div>
                    <div id="c45" className="white cell"></div>
                    <div id="c55" className="black cell"></div>
                    <div id="c65" className="white cell"></div>
                    <div id="c75" className="black cell"></div>
                    <div id="c85" className="white cell"></div>
                    <div id="c14" className="white cell"></div>
                    <div id="c24" className="black cell"></div>
                    <div id="c34" className="white cell"></div>
                    <div id="c44" className="black cell"></div>
                    <div id="c54" className="white cell"></div>
                    <div id="c64" className="black cell"></div>
                    <div id="c74" className="white cell"></div>
                    <div id="c84" className="black cell"></div>
                    <div id="c13" className="black cell"></div>
                    <div id="c23" className="white cell"></div>
                    <div id="c33" className="black cell"></div>
                    <div id="c43" className="white cell"></div>
                    <div id="c53" className="black cell"></div>
                    <div id="c63" className="white cell"></div>
                    <div id="c73" className="black cell"></div>
                    <div id="c83" className="white cell"></div>
                    <div id="c12" className="white cell"></div>
                    <div id="c22" className="black cell"></div>
                    <div id="c32" className="white cell"></div>
                    <div id="c42" className="black cell"></div>
                    <div id="c52" className="white cell"></div>
                    <div id="c62" className="black cell"></div>
                    <div id="c72" className="white cell"></div>
                    <div id="c82" className="black cell"></div>
                    <div id="c11" className="black cell"></div>
                    <div id="c21" className="white cell"></div>
                    <div id="c31" className="black cell"></div>
                    <div id="c41" className="white cell"></div>
                    <div id="c51" className="black cell"></div>
                    <div id="c61" className="white cell"></div>
                    <div id="c71" className="black cell"></div>
                    <div id="c81" className="white cell"></div>
                </div>


            </div>
        )
    }
}



export default ChessGame;


