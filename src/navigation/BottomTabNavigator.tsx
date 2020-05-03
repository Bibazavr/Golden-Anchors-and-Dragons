import * as React from 'react';
import {Route} from "react-native";
import {Icon} from "react-native-elements";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationProp} from "@react-navigation/core";

import Links from '../screens/Links';
import {DiceScreen} from "../screens/dices/Dices";
import {Characteristic} from "../screens/home/Home";
import {ParamListBase} from "@react-navigation/routers";


export interface NavigatorProps {
    navigation: NavigationProp<ParamListBase>
    route: Route
}

const BottomTab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'Dices';

export default function BottomTabNavigator({navigation, route}: NavigatorProps) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Links"
                component={Links}
                options={{
                    tabBarIcon: ({color, size}) => <Icon name={'settings'} color={color} size={size}/>,
                    title: 'Links',
                }}
            />
            <BottomTab.Screen
                name="Dices"
                component={DiceScreen}
                options={{
                    tabBarIcon: ({color, size}) => <Icon name={'casino'} color={color} size={size}/>,
                    title: 'Dices',
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Characteristic}
                options={{
                    tabBarIcon: ({color, size}) => <Icon name={'videogame-asset'} color={color} size={size}/>,
                    title: 'Profile',
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route: Route) {
    const routeName = route.state?.routes?.[route.state.index].name ?? INITIAL_ROUTE_NAME;

    return 'GA&D ' + routeName;
}
