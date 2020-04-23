import * as React from "react";
import renderer from "react-test-renderer";

import {Dice10} from "../dices";

it(`not toBeUndefined`, () => {
    const tree = renderer.create(<Dice10/>).toJSON();

    expect(tree).not.toBeUndefined();
});