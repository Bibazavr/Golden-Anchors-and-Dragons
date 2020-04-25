import * as React from "react";
import {FlatList, StyleSheet, TextInput, View} from "react-native";
import {Button} from "react-native-elements";

import {TodoItem} from "./components/TodoItem";
import {onChangeTodoItemChecked} from "./utils/onChangeTodoItemChecked";
import {onDeleteTodoItem} from "./utils/onDeleteTodoItem";
import {addTodoItem} from "./utils/addTodoItem";


export interface TodoScreenState {
    todoItem: { title: string, key: string, checked: boolean };
    list: TodoScreenState["todoItem"][];
}

export const TodoScreen = () => {
    const [list, setList] = React.useState<TodoScreenState["list"]>([]);
    const [todoItem, setTodoItem] = React.useState<string>("");

    const onChangeInput = (inputText: string) => setTodoItem(inputText);

    const addTodo = () => setList(addTodoItem(list, todoItem));

    const renderItem = (params: { item: TodoScreenState['todoItem'] }) => <TodoItem
        name={params.item.title} key={params.item.key}
        checked={params.item.checked}
        onDeleteTodoItem={() => setList(onDeleteTodoItem(list, params.item.key))}
        onChangeCheck={() => setList(onChangeTodoItemChecked(list, params.item.key))}
        testID={'todoItem'}
    />


    return <View style={stylesTodoScreen.container}>
        <TextInput style={stylesTodoScreen.input}
                   onChangeText={onChangeInput}
                   placeholder={"Введите todo"} testID="input"/>

        <Button style={stylesTodoScreen.buttonAdd} title={"add"}
                disabled={todoItem.length === 0}
                onPress={addTodo} testID={'addButton'}/>

        <FlatList data={list} renderItem={renderItem}/>
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
