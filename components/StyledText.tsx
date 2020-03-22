import * as React from 'react';
import { Text, TextStyle } from 'react-native';
interface MonoTextProps {
  style?: TextStyle,
  children: string
}
export function MonoText(props: MonoTextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
