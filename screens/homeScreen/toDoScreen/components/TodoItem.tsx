import * as React from "react";
import {StyleSheet, View} from "react-native";
import {CheckBox} from 'react-native-elements'

export const TodoItem = (props: TodoItemProps) => {
    return <View style={stylesTodoItem.container}>
        <CheckBox checked={true} title={props.name}/>
    </View>
}

export const stylesTodoItem = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
    },
    checkBox: {
        height: 50,
        width: 50
    }
});

export interface TodoItemProps {
    name: string
    checked: boolean
}