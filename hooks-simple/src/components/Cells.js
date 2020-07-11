import React from 'react';
import './cell.css'

const Cells = (props) => {

    const arr = [];
    let i = 0;

    for (i = 0; i < 100; i++) {
        arr.push(i)
    }
    const images = arr.map((num) => {
        let xCordinate;
        let yCordinate;

        // setting the y cordinate
        if (num < 10) {
            yCordinate = 0;
        }
        else if (num >= 10 && 20 > num) {
            yCordinate = 10;

        }
        else if (num >= 20 && 30 > num) {
            yCordinate = 20;
        }
        else if (num >= 30 && 40 > num) {
            yCordinate = 30;
        }
        else if (num >= 40 && 50 > num) {
            yCordinate = 40;
        }
        else if (num >= 50 && 60 > num) {
            yCordinate = 50;
        }
        else if (num >= 60 && 70 > num) {
            yCordinate = 60;
        }
        else if (num >= 70 && 80 > num) {
            yCordinate = 70;
        }
        else if (num >= 80 && 90 > num) {
            yCordinate = 80;
        }
        else if (num >= 90 && 100 > num) {
            yCordinate = 90;
        }


        // setting the x cordinate


        let stringNum = toString(num);
        let numLen = stringNum.length;
        if (num === 0) {
            xCordinate = 0;
        }
        else if (numLen === 2 && toString(num)[1] === '1') {
            xCordinate = 10;
            console.log('inside')
        }
        console.log('stringNum: '+stringNum);
        console.log('numLen: ' + numLen);
        console.log('num.toString()[1]: ' + num.toString()[1]);
        // value checking!
        console.log('num: ' + num);
        console.log('yCordinate: ' + yCordinate);
        console.log('xCordinate: ' + xCordinate);
        return <div id={`cell-${num}-`} key={[xCordinate, yCordinate]} className='cell'>{num}</div>
    });
    return (
        <div className="image-list">{images}</div>
    )
};


export default Cells;