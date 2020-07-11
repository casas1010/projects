import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number}
    // action === { colorToChange: 'change_red || 'change_green' || 'change_blue', payload :15 || -15}
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:  // default alwaus returns the state objext
            return state

    }

}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
                color='Blue'
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                color='Green'
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;





/*


import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SquareScreen = () => {
    const [Red, setRed] = useState(0);
    const [Blue, setBlue] = useState(0);
    const [Green, setGreen] = useState(0);
    const colorAdjuster = 40;

    function setColor(color, change) {
        // color === 'red', 'green','blue'
        // change === +15, -15
        switch (color) {
            case 'Red':
                Red + change > 255 || Red + change < 0 ? null : setRed(Red + change);
                return;
            case 'Blue':
                Blue + change > 255 || Blue + change < 0 ? null : setBlue(Blue + change);
                return;
            case 'Green':
                Blue + change > 255 || Green + change < 0 ? null : setGreen(Green + change);
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('Red', colorAdjuster)}
                onDecrease={() => setColor('Red', -1 * colorAdjuster)}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => setColor('Blue', colorAdjuster)}
                onDecrease={() => setColor('Blue', -1 * colorAdjuster)}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => setColor('Green', colorAdjuster)}
                onDecrease={() => setColor('Green', -1 * colorAdjuster)}
                color='Red'
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${Red},${Green},${Blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
*/
