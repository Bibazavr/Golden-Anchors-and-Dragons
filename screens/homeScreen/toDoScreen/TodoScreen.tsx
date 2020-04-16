import * as React from "react";
import {FlatList, StyleSheet, TextInput, View} from "react-native";
import {TodoItem} from "./components/TodoItem";
import {onChangeTodoItemChecked} from "./utils/onChangeTodoItemChecked";
import {onDeleteTodoItem} from "./utils/onDeleteTodoItem";
import {Button} from "react-native-elements";


export interface TodoScreenState {
    todoItem: { title: string, key: string, checked: boolean }
    list: TodoScreenState["todoItem"][]
}

export const TodoScreen = () => {
    const [list, setList] = React.useState<TodoScreenState["list"]>([])
    const [todoItem, setTodoItem] = React.useState<string>("");

    return <View style={stylesTodoScreen.container}>
        <TextInput style={stylesTodoScreen.input}
                   onChangeText={(inputText) => setTodoItem(inputText)}
                   placeholder={"Введите todo"}/>

        <Button style={stylesTodoScreen.buttonAdd} title={"add"} disabled={todoItem.length === 0} onPress={() => {
            let newValue = list.slice()
            newValue.push({title: todoItem, key: list.length.toString(), checked: false})
            setList(newValue)
        }}/>

        <FlatList data={list} renderItem={({item}) => <TodoItem name={item.title}
                                                                checked={item.checked}
                                                                onDeleteTodoItem={() => setList(onDeleteTodoItem(list, item.key))}
                                                                onChangeCheck={() => setList(onChangeTodoItemChecked(list, item.key))}/>}/>
    </View>
}

const stylesTodoScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: "#f3f3f3",
        height: 30,
        margin: 10
    },
    buttonAdd: {
        margin: 10
    }
});
