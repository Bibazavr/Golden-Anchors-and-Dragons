import {RefObject} from 'react';
import {NavigationContainerRef, useLinking} from '@react-navigation/native';
import {Linking} from 'expo';


export default function (containerRef: RefObject<NavigationContainerRef>) {
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
