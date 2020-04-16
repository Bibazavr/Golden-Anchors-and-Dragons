import {TodoScreenState} from "../TodoScreen";

export const onDeleteTodoItem = (list: TodoScreenState["list"], key: string) => {
    let newValue: TodoScreenState["list"] = [];

    list.map((value) => {
        if (value.key !== key) {
            newValue.push(value);
        }
    });
    return newValue;
}