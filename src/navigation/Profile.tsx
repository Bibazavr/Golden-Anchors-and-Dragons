import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {Characteristic} from "../screens/home/Home";
import {Inventory} from "../screens/inventory/Inventory";
import {Todo} from "../screens/todo/Todo";
import {NavigatorProps} from "./BottomTabNavigator";
import {Icon} from "react-native-elements";


const Drawer = createDrawerNavigator();

export default function Profile({navigation, route}: NavigatorProps) {
    return (
        <Drawer.Navigator initialRouteName={"Profile"} drawerPosition={'right'} drawerType={'slide'}>
            <Drawer.Screen name={"Profile"} component={Characteristic}
                           options={{
                               drawerIcon: ({color, size}) => <Icon name={'settings'} color={color} size={size}/>,
                               title: 'Profile',
                           }}/>
            <Drawer.Screen name={"Inventory"} component={Inventory} options={{
                drawerIcon: ({color, size}) => <Icon name={'settings'} color={color} size={size}/>,
                title: 'Inventory',
            }}/>
            <Drawer.Screen name={"Todo"} component={Todo} options={{
                drawerIcon: ({color, size}) => <Icon name={'settings'} color={color} size={size}/>,
                title: 'Todo',
            }}/>
        </Drawer.Navigator>
    );
}
