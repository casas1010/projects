import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = (props) => {
    return (
        <View>
            {/* ALL PROPS ARE made up: 'title','imageSource' */}
            <ImageDetail
                title='Forest'
                imageSource={require('../../assets/forest.jpg')}
                score='1'
            />
            <ImageDetail
                title='Beach'
                imageSource={require('../../assets/beach.jpg')}
                score='2'

            />
            <ImageDetail
                title='mountain'
                imageSource={require('../../assets/mountain.jpg')}
                score='4'

            />

        </View>
    );
}

// const style = StyleSheet.

export default ImageScreen;