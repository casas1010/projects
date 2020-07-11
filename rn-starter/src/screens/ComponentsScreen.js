import React from 'react'; // instructos for how components communicate with one another!
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Juan';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.subText}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subText:{
        fontSize: 20
    }
})

export default ComponentsScreen;