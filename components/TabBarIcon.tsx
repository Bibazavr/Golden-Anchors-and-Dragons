import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

interface TabBarIconProps {
    focused: boolean,
    name: string
}

export default function TabBarIcon(props: TabBarIconProps) {
    return (
        <Ionicons
            name={props.name}
            size={30}
            style={{marginBottom: -3}}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
