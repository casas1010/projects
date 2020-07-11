import React from 'react';
import { View, Text,StyleSheet, Image} from 'react-native';

const ImageDetail =(props)=>{
    return(
        <View>
            {/* require() method is used for path navigation */}
            {/* assets folder is where u should put ur files in locally*/}
            {/* source tells the image where to find the image */}
            <Image source={props.imageSource}  />
        <Text>
            {props.title}
            {/* <br /> */}
            {`score: ${props.score}`}
        </Text>
        </View>
    );
}

const style = StyleSheet.create({})

export default ImageDetail;