import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import * as RootNavigation from '../../functions/RootNavigation';
// import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    constructor(props) {
        super(props);
    }

    // static navigationOptions = {
    //     title: 'Review Jobs',
    //     headerRight:
    //         <Button
    //             title='Settings'
    //             onPress={() => {
    //                 RootNavigation.navigate('Settings');

    //                 // navigate('Settings') 
    //             }}
    //         />

    // }
    render() {

        return (
            <SafeAreaView>
                <Text>
                    ReviewScreen
                </Text>
            </SafeAreaView>
        );
    }
}

export default ReviewScreen;