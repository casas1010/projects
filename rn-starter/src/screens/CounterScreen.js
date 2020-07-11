import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const reducer = (state, action) => {
    // (2) create actions to apply to state data
    switch (action.type) {
        case 'increase_counter':
            return { ...state, counter: state.counter + action.payload };
        case 'decrease_counter':
            return { ...state, counter: state.counter + action.payload };
        case 'default':
            return state
    }
}

const CounterScreen = () => {
    // (1) create state and define initial conditions
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button
                title='increase'
                onPress={() => {
                    dispatch({ type: 'increase_counter', payload: 1 })
                }}
            />
            <Button
                title='decrease'
                onPress={() => {
                    dispatch({ type: 'decrease_counter', payload: -1 })
                }}
            />
            <Text>Current Count: {state.counter}</Text>
        </View>
    );
}

export default CounterScreen;










// import React, {useState} from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const CounterScreen = () => {

//     const [counter,setCounter] = useState(0);

//     return (
//         <View>
//             <Button
//                 title='increase'
//                 onPress={() => {
//                     setCounter( counter+1 );
//                 }}
//             />
//             <Button
//                 title='decrease'
//                 onPress={()=>{
//                     setCounter(counter-1 );
//                 }}
//             />
//             <Text>Current Count: {counter}</Text>
//         </View>
//     );
// }

// export default CounterScreen;

