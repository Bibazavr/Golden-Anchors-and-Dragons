import * as React from 'react';
import {Route} from "react-native";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationProp} from "@react-navigation/core";

import Home from '../screens/home/Home';
import Links from '../screens/Links';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

interface BottomTabNavigatorProps {
    navigation: NavigationProp<{ headerTitle: (s: string) => void }>
    route: Route
}

export default function BottomTabNavigator({navigation, route}: BottomTabNavigatorProps) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({headerTitle: getHeaderTitle(route)});

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Get Started',
                }}
            />
            <BottomTab.Screen
                name="Links"
                component={Links}
                options={{
                    title: 'Resources',
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route: Route) {
    const routeName = route.state?.routes?.[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'Golden Anchors';
        case 'Links':
            return 'Links to learn more';
    }
}
