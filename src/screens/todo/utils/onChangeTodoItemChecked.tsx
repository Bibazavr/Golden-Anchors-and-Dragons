import {TodoScreenState} from "../Todo";

export const onChangeTodoItemChecked = (list: TodoScreenState["list"], key: string): TodoScreenState["list"] => {
    let newList: TodoScreenState["list"] = [];

    list.map((value) => {
        if (key === value.key) {
            let newValue = value;
            newValue.checked = !value.checked;
            newList.push(newValue);
        } else {
            newList.push(value)
        }
    })
    return newList
}
