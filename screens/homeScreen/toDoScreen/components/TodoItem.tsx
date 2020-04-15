import * as React from "react";
import {StyleSheet, View} from "react-native";
import {CheckBox} from 'react-native-elements'


interface TodoItemProps {
    name: string
    checked: boolean
    onChangeCheck: () => void;
}

export const TodoItem = (props: TodoItemProps) => {
    return <View style={stylesTodoItem.container}>
        <CheckBox checked={props.checked} title={props.name} onPress={props.onChangeCheck}/>
    </View>
}

const stylesTodoItem = StyleSheet.create({
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
