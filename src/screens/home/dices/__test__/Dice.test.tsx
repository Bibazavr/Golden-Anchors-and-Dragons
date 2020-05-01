import * as React from "react";
import {render} from "@testing-library/react-native";

import {DiceScreen} from "../Dices";

describe("DiceScreen", () => {
    it(`not toBeUndefined`, () => {
        const tree = render(<DiceScreen/>).asJSON();

        expect(tree).not.toBeUndefined();
    });
})
