import * as React from "react";
import {fireEvent, render} from "@testing-library/react-native";

import {Dice10} from "../dices";

describe("dices", () => {
    it(`drop`, () => {
        const page = render(<Dice10/>);

        const dice = page.getByTestId("diceButton");

        fireEvent.press(dice);

        expect(page.asJSON()).not.toBeUndefined();
    });
})
