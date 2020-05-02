import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {Characteristic} from "../screens/home/Home";
import {Inventory} from "../screens/inventory/Inventory";
import {Todo} from "../screens/todo/Todo";
import {NavigatorProps} from "./BottomTabNavigator";


const Drawer = createDrawerNavigator();

export default function Profile({navigation, route}: NavigatorProps) {
    return (
        <Drawer.Navigator initialRouteName={"Profile"} drawerPosition={'right'} drawerType={'slide'}>
            <Drawer.Screen name={"Profile"} component={Characteristic}/>
            <Drawer.Screen name={"Inventory"} component={Inventory}/>
            <Drawer.Screen name={"Todo"} component={Todo}/>
        </Drawer.Navigator>
    );
}
