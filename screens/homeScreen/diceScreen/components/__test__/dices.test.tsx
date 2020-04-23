import * as React from "react";
import renderer from "react-test-renderer";

import {Dice10} from "../dices";

it(`renders correctly`, () => {
    const tree = renderer.create(<Dice10/>).toJSON();

    expect(tree).toMatchSnapshot();
});