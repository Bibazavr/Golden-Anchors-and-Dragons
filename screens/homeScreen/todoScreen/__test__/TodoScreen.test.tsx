import * as React from "react";
import {fireEvent, render} from "@testing-library/react-native";

import {TodoScreen} from "../TodoScreen";

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe(`TodoScreen`, () => {
    it('addAndDeleteTodoItem', () => {
        const page = render(<TodoScreen/>)

        const test = 'Создал тест';

        const input = page.getByTestId('input');
        fireEvent.changeText(input, test);

        const button = page.getByTestId('addButton');
        fireEvent.press(button);

        expect(page.queryByTestId('todoItem')).toBeTruthy();

        const checkbox = page.getByTestId("checkbox")

        fireEvent.press(checkbox);

        expect(page.asJSON()).toMatchSnapshot();

        const deleteButton = page.getByTestId("todoItem-delete")

        fireEvent.press(deleteButton);

        expect(page.queryByTestId('todoItem')).toBeFalsy()

        expect(page.asJSON()).toMatchSnapshot();
    })
});