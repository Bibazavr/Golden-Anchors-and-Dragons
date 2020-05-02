import {onChangeTodoItemChecked} from "../onChangeTodoItemChecked";
import {onDeleteTodoItem} from "../onDeleteTodoItem";
import {TodoScreenState} from "../../Todo";
import {addTodoItem} from "../addTodoItem";

it('onChangeTodoItemChecked', () => {
    const list: TodoScreenState["list"] = [
        {
            key: "1",
            title: "Biba",
            checked: false,
        },
        {
            key: "2",
            title: "biba2",
            checked: true,
        }
    ];

    const supposeList: TodoScreenState["list"] = [
        {
            key: "1",
            title: "Biba",
            checked: false,
        },
        {
            key: "2",
            title: "biba2",
            checked: false,
        }
    ];

    const modifiedList = onChangeTodoItemChecked(list, "2");

    expect(modifiedList).toEqual(supposeList);
});

it('onDeleteTodoItem', () => {
    const list: TodoScreenState["list"] = [
        {
            key: "1",
            title: "Biba",
            checked: false,
        },
        {
            key: "2",
            title: "biba2",
            checked: true,
        }
    ];

    const supposeList: TodoScreenState["list"] = [
        {
            key: "1",
            title: "Biba",
            checked: false,
        },
    ];

    const modifiedList = onDeleteTodoItem(list, "2");

    expect(modifiedList).toEqual(supposeList);
});

it("addTodoItem", () => {
    const list: TodoScreenState["list"] = [
        {
            key: "0",
            title: "Biba",
            checked: false,
        },

    ];

    const supposeList: TodoScreenState["list"] = [
        {
            key: "0",
            title: "Biba",
            checked: false,
        },
        {
            key: "1",
            title: "biba2",
            checked: false,
        }
    ];

    const modifiedList = addTodoItem(list, "biba2");

    expect(modifiedList).toEqual(supposeList);
})
