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

    componentDidMount() {

    }


    elementLocation = (eve) => {
        var clickID = eve.target.id;
        var elementXPosition = (parseInt(clickID[1]) - 1) * 50;
        var elementYPosition = (8 - clickID[2]) * 50;
        return [elementXPosition, elementYPosition];

    }

    elementClick = (eve) => {
        var clickElement = eve.target;
        var clickID = eve.target.id;
        var clickCount = this.state.clickCount;
        var elementLocation = this.elementLocation(eve);

        if (this.state.clickArr.length == 2) {
            let imgID = this.state.clickArr[0];
            let newlocation = this.state.clickArr[1];
            $(`#${imgID}`).css('left', newlocation[0]);
            $(`#${imgID}`).css('top', newlocation[1]);

            $('#' + imgID).css('border-style', 'none');
            this.setState({ clickArr: [] })

        }

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
                <img id="i-pa-08-w" style={{ 'top': '300px', 'left': '350px' }} className="image" alt="wpawn" src="https://img.icons8.com/windows/32/000000/pawn.png"  />


                <img id="i-br-01-b" style={{ 'top': '00px', 'left': '350px' }} className="image" alt="brook" src="https://img.icons8.com/ios-filled/100/000000/rook.png"  />
                <img id="i-br-02-b" style={{ 'top': '00px', 'left': '0px' }} className="image" alt="brook" src="https://img.icons8.com/ios-filled/100/000000/rook.png"  />
                <img id="i-kn-01-b" style={{ 'top': '00px', 'left': '50px' }} className="image" alt="bknight" src="https://img.icons8.com/clouds/100/000000/knight.png"/>
                <img id="i-kn-02-b" style={{ 'top': '00px', 'left': '300px' }} className="image" alt="bknight" src="https://img.icons8.com/clouds/100/000000/knight.png"/>
                <img id="i-kn-01-b" style={{ 'top': '350px', 'left': '250px' }} className="image" alt="walfil" src="https://www.iconspng.com/images/white-silhouette-chess-piece-remix-bishop-alfil/white-silhouette-chess-piece-remix-bishop-alfil.jpg"/>
                <img id="i-kn-01-b" style={{ 'top': '350px', 'left': '250px' }} className="image" alt="walfil" src="https://www.iconspng.com/images/white-silhouette-chess-piece-remix-bishop-alfil/white-silhouette-chess-piece-remix-bishop-alfil.jpg"/>

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




/*
import React from 'react';
import './ChessGame.css';


const a1 = <div id="c18" className="white cell"></div>
const a2 = <div id="c28" className="black cell"></div>
const a3 = <div id="c38" className="white cell"></div>
const a4 = <div id="c48" className="black cell"></div>
const a5 = <div id="c58" className="white cell"></div>
const a6 = <div id="c68" className="black cell"></div>
const a7 = <div id="c78" className="white cell"></div>
const a8 = <div id="c88" className="black cell"></div>
const a9 = <div id="c17" className="black cell"></div>
const a10 = <div id="c27" className="white cell"></div>
const a11 = <div id="c37" className="black cell"></div>
const a12 = <div id="c47" className="white cell"></div>
const a13 = <div id="c57" className="black cell"></div>
const a14 = <div id="c67" className="white cell"></div>
const a15 = <div id="c77" className="black cell"></div>
const a16 = <div id="c87" className="white cell"></div>
const a17 = <div id="c16" className="white cell"></div>
const a18 = <div id="c26" className="black cell"></div>
const a19 = <div id="c36" className="white cell"></div>
const a20 = <div id="c46" className="black cell"></div>
const a21 = <div id="c56" className="white cell"></div>
const a22 = <div id="c66" className="black cell"></div>
const a23 = <div id="c76" className="white cell"></div>
const a24 = <div id="c86" className="black cell"></div>
const a25 = <div id="c15" className="black cell"></div>
const a26 = <div id="c25" className="white cell"></div>
const a27 = <div id="c35" className="black cell"></div>
const a28 = <div id="c45" className="white cell"></div>
const a29 = <div id="c55" className="black cell"></div>
const a30 = <div id="c65" className="white cell"></div>
const a31 = <div id="c75" className="black cell"></div>
const a32 = <div id="c85" className="white cell"></div>
const a33 = <div id="c14" className="white cell"></div>
const a34 = <div id="c24" className="black cell"></div>
const a35 = <div id="c34" className="white cell"></div>
const a36 = <div id="c44" className="black cell"></div>
const a37 = <div id="c54" className="white cell"></div>
const a38 = <div id="c64" className="black cell"></div>
const a39 = <div id="c74" className="white cell"></div>
const a40 = <div id="c84" className="black cell"></div>
const a41 = <div id="c13" className="black cell"></div>
const a42 = <div id="c23" className="white cell"></div>
const a43 = <div id="c33" className="black cell"></div>
const a44 = <div id="c43" className="white cell"></div>
const a45 = <div id="c53" className="black cell"></div>
const a46 = <div id="c63" className="white cell"></div>
const a47 = <div id="c73" className="black cell"></div>
const a48 = <div id="c83" className="white cell"></div>
const a49 = <div id="c12" className="white cell"></div>
const a50 = <div id="c22" className="black cell"></div>
const a51 = <div id="c32" className="white cell"></div>
const a52 = <div id="c42" className="black cell"></div>
const a53 = <div id="c52" className="white cell"></div>
const a54 = <div id="c62" className="black cell"></div>
const a55 = <div id="c72" className="white cell"></div>
const a56 = <div id="c82" className="black cell"></div>
const a57 = <div id="c11" className="black cell"></div>
const a58 = <div id="c21" className="white cell"></div>
const a59 = <div id="c31" className="black cell"></div>
const a60 = <div id="c41" className="white cell"></div>
const a61 = <div id="c51" className="black cell"></div>
const a62 = <div id="c61" className="white cell"></div>
const a63 = <div id="c71" className="black cell"></div>
const a64 = <div id="c81" className="white cell"></div>

const divArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a39, a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a50, a51, a52, a53, a54, a55, a56, a57, a58, a59, a60, a61, a62, a63, a64];

// for (var cell in divArray) {
//     var cellID = divArray[cell].props.id;
//     var cellElement = divArray[cell].props;
//     //console.log(clickID);
//     if (clickID.slice(1) == cellID.slice(1)) {
//         clickElement.style = "border-style: double;"
//     }
// }


class ChessGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickArr: [],
            clickCount: 0,

            // [id]
        }

        this.cellClick = this.cellClick.bind(this);
    }

    cellClick = (eve) => {
        var clickElement = eve.target;
        var clickID = eve.target.id;
        var clickCount = this.state.clickCount;
        //console.log(clickID);



    }




    render() {


        return (
            <div onClick={this.cellClick}>
                <div className="chessboard" >
                    {a1}
                    {a2}
                    {a3}
                    {a4}
                    {a5}
                    {a6}
                    {a7}
                    {a8}
                    {a9}
                    {a10}
                    {a11}
                    {a12}
                    {a13}
                    {a14}
                    {a15}
                    {a16}
                    {a17}
                    {a18}
                    {a19}
                    {a20}
                    {a21}
                    {a22}
                    {a23}
                    {a24}
                    {a25}
                    {a26}
                    {a27}
                    {a28}
                    {a29}
                    {a30}
                    {a31}
                    {a32}
                    {a33}
                    {a34}
                    {a35}
                    {a36}
                    {a37}
                    {a38}
                    {a39}
                    {a40}
                    {a41}
                    {a42}
                    {a43}
                    {a44}
                    {a45}
                    {a46}
                    {a47}
                    {a48}
                    {a49}
                    {a50}
                    {a51}
                    {a52}
                    {a53}
                    {a54}
                    {a55}
                    {a56}
                    {a57}
                    {a58}
                    {a59}
                    {a60}
                    {a61}
                    {a62}
                    {a63}
                    {a64}
                </div>


            </div>
        )
    }
}



export default ChessGame;


*/