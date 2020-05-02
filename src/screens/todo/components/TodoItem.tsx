import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Button, CheckBox, Text} from 'react-native-elements'


interface TodoItemProps {
    name: string;
    checked: boolean;
    onChangeCheck: () => void;
    onDeleteTodoItem: () => void;
    testID?: string;
}

export const TodoItem = (props: TodoItemProps) => {
    return <View style={stylesTodoItem.container} testID={props.testID}>
        <CheckBox containerStyle={stylesTodoItem.checkBox} checked={props.checked}
                  onPress={props.onChangeCheck}/>
        <Text style={stylesTodoItem.text}>{props.name}</Text>
        <Button title={"Удалить"} onPress={props.onDeleteTodoItem} testID={"todoItem-delete"}/>
    </View>
}

const stylesTodoItem = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        margin: 5,
        backgroundColor: '#fff',
    },
    checkBox: {},
    text: {
        flexGrow: 1,
        maxWidth: 150,
    },
    button: {
        height: 50,
        width: 50
    }
});
