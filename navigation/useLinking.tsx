import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';
import { RefObject } from 'react';
// FIXME: тут не должен быть тип any
export default function(containerRef: RefObject<any>) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Settings: 'settings',
        },
      },
    },
  });
}
