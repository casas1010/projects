import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('starting string butchs')
    return (
        <View>
            <Text>Enter password</Text>
            <TextInput
                style={styles.input}
                // IOS does capitalize by default, dictionary auto correct is on by default
                // Android does not capitalize by default, dictionary auto correct is off by default
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => {
                    setPassword(newValue)
                }}
            />
            {password.length<5 ? <Text>Password must be longer than 5 characters</Text>:null}
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;


/*

return (
  <View style={{backgroundColor:'red'}}>
    <Text>text</Text>
    <TextInput value={'Hello'}/>
  </View>
);

*/