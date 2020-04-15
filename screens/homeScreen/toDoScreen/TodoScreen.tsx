import * as React from "react";
import {Button, FlatList, TextInput, View} from "react-native";
import {stylesTodoScreen} from "./stylesTodoScreen";
import {TodoItem} from "./components/TodoItem";
import {CheckBox} from "react-native-elements";

export const TodoScreen = () => {
    const [list, setList] = React.useState<{ title: string, key: string }[]>([])
    const [todoItem, setTodoItem] = React.useState<string>("");
    console.log(todoItem, list);
    return <View style={stylesTodoScreen.container}>
        <TextInput style={stylesTodoScreen.input}
                   onChangeText={(inputText) => setTodoItem(inputText)}
                   placeholder={"Введите todo"}/>
        <Button title={"add"} onPress={() => {
            let newValue = list.slice()
            newValue.push({title: todoItem, key: list.length.toString()})
            setList(newValue)
        }}/>
        <CheckBox checked={false} title={"BIBA"}/>

        <FlatList data={list} renderItem={({item}) => <TodoItem name={item.title} checked={true}/>}/>
    </View>
}

