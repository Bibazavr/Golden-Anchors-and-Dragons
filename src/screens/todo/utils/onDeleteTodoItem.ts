import {TodoScreenState} from "../Todo";

export const onDeleteTodoItem = (list: TodoScreenState["list"], key: string) => {
    let newValue: TodoScreenState["list"] = [];

    list.map((value) => {
        if (value.key !== key) {
            newValue.push(value);
        }
    });
    return newValue;
}
