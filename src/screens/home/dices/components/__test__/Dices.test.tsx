import * as React from "react";
import {fireEvent, render} from "@testing-library/react-native";

import {Dice, Dices} from "../Dices";

describe("dices", () => {
    it(`drop4`, () => {
        const page = render(<Dice facets={4}/>);

        const dice = page.getByTestId("diceButton");

        fireEvent.press(dice);

        expect(page.asJSON()).not.toBeUndefined();
    });
    it('renders correctly', () => {
        const page = render(<Dices/>);

        expect(page.asJSON()).toMatchSnapshot()
    })
})
