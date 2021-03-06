import * as React from "react";
import {Route} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

import BottomTabNavigator, {NavigatorProps} from "./BottomTabNavigator";
import {Inventory} from "../screens/inventory/Inventory";
import {Todo} from "../screens/todo/Todo";
import {Settings} from "../screens/settings/Settings";
import {Icon} from "react-native-elements";


const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = 'Bot';

export default function ({navigation, route}: NavigatorProps) {
    navigation.setOptions({swipeEnabled: shouldSwipe(route)});
    return (
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} mode={'modal'} headerMode={'screen'}>
            <Stack.Screen name={"Bot"} component={BottomTabNavigator} options={{
                title: 'Inventory',
                headerRight: ({tintColor}) => resolveRight({navigation, route, tintColor}),
                headerRightContainerStyle: {marginRight: 10}
            }}/>
            <Stack.Screen name={"Inventory"} component={Inventory} options={{
                title: 'Inventory',
            }}/>
            <Stack.Screen name={"Todo"} component={Todo} options={{
                title: 'Todo',
            }}/>
            <Stack.Screen name={"Settings"} component={Settings} options={{
                title: 'Settings',
            }}/>
        </Stack.Navigator>
    );
}

function shouldSwipe(route: Route) {
    const routeName = route.state?.routes?.[route.state.index]?.state?.routes[route.state?.routes?.[route.state.index]?.state?.index].name
    return routeName === 'Profile';
}

function shouldAnimate(route: Route) {
    // Надо включать анимацию только когда открыт не botNavigation
    const routeName = route?.state?.routes[route?.state?.index].name
    return false
}

// FIXME: Плохо, что у navigation тип any
function resolveRight({navigation, route, tintColor}: { navigation: any, route: Route, tintColor: string | undefined }) {
    const routeName = route.state?.routes?.[route.state.index]?.state?.routes[route.state?.routes?.[route.state.index]?.state?.index].name
    console.log(routeName)
    if (routeName === 'Profile')
        return <Icon color={tintColor} name={'reorder'} onPress={() => navigation.openDrawer()}/>
    return null
}
