import * as React from "react";
import {NavigationContainerRef, useLinking} from '@react-navigation/native';

import {Linking} from 'expo';


export default function (containerRef: React.RefObject<NavigationContainerRef>) {
    return useLinking(containerRef, {
        prefixes: [Linking.makeUrl('/')],
        config: {
            Root: {
                path: 'root',
                screens: {
                    Bot: {
                        path: 'bot',
                        screens: {
                            Profile: 'profile',
                            Links: 'links',
                            Dices: 'dices',
                        }
                    },
                    Inventory: 'inventory',
                    Todo: 'todo',
                },
            },
        },

    });
}
