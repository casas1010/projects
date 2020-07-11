import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyleOne} > Child 1</Text>
        <Text style={styles.textStyleTwo} > Child 2</Text>
        <Text style={styles.textStyleThree} > Child 3</Text>
        
    </View>
}


const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        flexDirection:'row'
        
    },
    textStyleOne: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red',
        flex:1,
        marginBottom: 100
    },
    textStyleTwo: {
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'green',
        flex: 1,
        margin: 10
    },
    textStyleThree: {
        borderWidth: 3,
        borderColor: 'purple',
        backgroundColor: 'purple',
        flex: 1,
        marginBottom: 100
    }
})

export default BoxScreen;