import * as React from "react";
import {Linking} from 'expo';
import {NavigationContainerRef, useLinking} from '@react-navigation/native';


export default function (containerRef: React.RefObject<NavigationContainerRef>) {
    return useLinking(containerRef, {
        prefixes: [Linking.makeUrl('/')],
        config: {
            Root: {
                path: 'root',
                screens: {
                    Home: 'home',
                    Links: 'links',
                    Dices: 'dices',
                },
            },
        },
    });
}