import * as React from "react";
import {Route} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

import BottomTabNavigator, {NavigatorProps} from "./BottomTabNavigator";
import {Inventory} from "../screens/inventory/Inventory";
import {Todo} from "../screens/todo/Todo";


const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = 'Bot';

export default function ({navigation, route}: NavigatorProps) {
    navigation.setOptions({swipeEnabled: shouldSwipe(route)});
    return (
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} screenOptions={{animationTypeForReplace: "push",}}>
            <Stack.Screen name={"Bot"} component={BottomTabNavigator}/>
            <Stack.Screen name={"Inventory"} component={Inventory} options={{
                title: 'Inventory',
                animationEnabled: false,
            }}/>
            <Stack.Screen name={"Todo"} component={Todo} options={{
                title: 'Todo',
                animationEnabled: false,
            }}/>
        </Stack.Navigator>
    );
}

function shouldSwipe(route: Route) {
    const routeName = route.state?.routes?.[route.state.index]?.state?.routes[route.state?.routes?.[route.state.index]?.state?.index].name
    return routeName === 'Profile';
}


