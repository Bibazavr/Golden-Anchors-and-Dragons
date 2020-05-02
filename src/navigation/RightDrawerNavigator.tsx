import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Inventory} from "../screens/inventory/Inventory";
import {Todo} from "../screens/todo/Todo";
import BottomTabNavigator, {NavigatorProps} from "./BottomTabNavigator";
import {Icon} from "react-native-elements";
import {Route} from "react-native";

const INITIAL_ROUTE_NAME = 'Profile';

const RightDrawer = createDrawerNavigator();

export default function ({navigation, route}: NavigatorProps) {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
    return (
        <RightDrawer.Navigator initialRouteName={"Profile"} drawerPosition={'right'} drawerType={'slide'}
                               lazy={false}
                               statusBarAnimation={'slide'}
        >

            <RightDrawer.Screen name={"Profile"} component={BottomTabNavigator} options={{
                drawerIcon: ({color, size}) => <Icon name={'settings'} color={color} size={size}/>,
                title: 'Profile',
            }}/>

            <RightDrawer.Screen name={"Inventory"} component={Inventory} options={{
                drawerIcon: ({color, size}) => <Icon name={'settings'} color={color} size={size}/>,
                title: 'Inventory',
            }}/>

            <RightDrawer.Screen name={"Todo"} component={Todo} options={{
                drawerIcon: ({color, size}) => <Icon name={'settings'} color={color} size={size}/>,
                title: 'Todo',
            }}/>

        </RightDrawer.Navigator>
    );
}

export function getHeaderTitle(route: Route) {
    const routeName = route.state?.routes?.[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    return 'GA&D' + routeName;
}
