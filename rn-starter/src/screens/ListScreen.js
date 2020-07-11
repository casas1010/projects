import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'albama', age:'10' },
        { name: 'albert', age: '12' },
        { name: 'taco', age:'13' },
        { name: 'asdasd', age: '11' },


    ]

    return (
        <FlatList style={styles.textStyle}
            keyExtractor={(item) => item.name}
            data={friends}
            renderItem={(element) => {
                // element has the property 'item' and 'index'
                // element === { item: {name: 'Friend #1' }, index: 0 }
                return <Text>{ `name: ${element.item.name}  age: ${element.item.age} `}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
})

export default ListScreen;
