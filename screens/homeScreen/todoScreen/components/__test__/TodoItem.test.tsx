import * as React from "react";
import {render} from "@testing-library/react-native";

import {TodoItem} from "../TodoItem";


it(`renders correctly`, () => {
    const tree = render(<TodoItem checked={true} name={"biba"} onChangeCheck={() => console.log("changeCheck")}
                                  onDeleteTodoItem={() => console.log("onDeleteTodoItem")}/>).asJSON();

    expect(tree).toMatchSnapshot();
});