import renderer from "react-test-renderer";
import * as React from "react";
import {TodoItem} from "../TodoItem";

it(`renders correctly`, () => {
    const tree = renderer.create(<TodoItem checked={true} name={"biba"} onChangeCheck={() => console.log("changeCheck")}
                                           onDeleteTodoItem={() => console.log("onDeleteTodoItem")}/>).toJSON();

    expect(tree).toMatchSnapshot();
});