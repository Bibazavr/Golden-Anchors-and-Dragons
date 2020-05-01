import * as React from 'react';
import {render} from "@testing-library/react-native";

import {MonoText} from '../StyledText';

it(`renders correctly`, () => {
  const tree = render(<MonoText>Snapshot test!</MonoText>).asJSON();

  expect(tree).toMatchSnapshot();
});
