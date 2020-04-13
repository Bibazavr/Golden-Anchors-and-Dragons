import * as React from "react";
import renderer from "react-test-renderer";
import {InventoryScreen} from "../InventoryScreen";


it(`renders correctly`, () => {
    const tree = renderer.create(<InventoryScreen/>).toJSON();

    expect(tree).toMatchSnapshot();
});