import * as React from "react";
import renderer from "react-test-renderer";
import {DiceScreen} from "../DiceScreen";

it(`renders correctly`, () => {
    const tree = renderer.create(<DiceScreen/>).toJSON();

    expect(tree).toMatchSnapshot();
});