import * as React from 'react';
import {Route} from "react-native";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationProp} from "@react-navigation/core";

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

interface BottomTabNavigatorProps {
    navigation: NavigationProp<{headerTitle: (s: string)=>void}>
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
                component={HomeScreen}
                options={{
                    title: 'Get Started',
                }}
            />
            <BottomTab.Screen
                name="Links"
                component={LinksScreen}
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
            return 'How to get started';
        case 'Links':
            return 'Links to learn more';
    }
}
