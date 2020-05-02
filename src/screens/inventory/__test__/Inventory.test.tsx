import * as React from "react";
import {render} from "@testing-library/react-native";

import {Inventory} from "../Inventory";


it(`renders correctly`, () => {
    const tree = render(<Inventory/>).asJSON();

    expect(tree).toMatchSnapshot();
});
