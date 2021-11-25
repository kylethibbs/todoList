import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {

    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.Text}</Text>
            </View>

            <View style={styles.circular}> </View>
        </View>
    )
} 


const styles = StyleSheet.create({

    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },

    itemLeft: {},
    square: {},
    itemText: {},
    circular: {},
});

export default Task;