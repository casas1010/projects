import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>

      <Button
        title='Go to BoxScreen'
        onPress={ ()=>{
          props.navigation.navigate('Box');
        }}
      />

      <Button
        title='Go to TextScreen'
        onPress={ ()=>{
          props.navigation.navigate('Text');
        }}
      />
      <Button
        title='Go to SquareScreen'
        onPress={() => {
          props.navigation.navigate('Square');
        }}
      />
      <Button
        title='Go to ColorScreen'
        onPress={() => {
          props.navigation.navigate('Color');
        }}
      />
      <Button
        title='Go to CounterScreen'
        onPress={() => {
          props.navigation.navigate('Counter');
        }}
      />
      <Button
        title='Go to ImageScreen'
        onPress={() => {
          props.navigation.navigate('Image')
        }}
      />
      <Button
        title='Go to List'   // text that is displayed
        onPress={() => {   // same as onClick!
          props.navigation.navigate('List')
        }}
      />
      <Button
        title='Go to Components'   // text that is displayed
        onPress={() => {   // same as onClick!
          props.navigation.navigate('Components')
        }}
      />



      {/* When a use touches a element inside the TouchableOpacity, you will get a onClick event */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Components')
        }}
      >
        

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

