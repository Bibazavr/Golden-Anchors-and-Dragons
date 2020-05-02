import {TodoScreenState} from "../Todo";

export const addTodoItem = (list: TodoScreenState["list"], item: string) => {
    let newValue = list.slice()
    newValue.push({title: item, key: list.length.toString(), checked: false})
    return newValue
}
