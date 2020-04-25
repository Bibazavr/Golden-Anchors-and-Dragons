import * as React from "react";
import {render} from "@testing-library/react-native";

import {InventoryScreen} from "../InventoryScreen";


it(`renders correctly`, () => {
    const tree = render(<InventoryScreen/>).asJSON();

    expect(tree).toMatchSnapshot();
});