import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {Characteristic} from "../screens/home/Home";
import {Inventory} from "../screens/inventory/Inventory";
import {Todo} from "../screens/todo/Todo";


const Drawer = createDrawerNavigator();

export default function RightSide() {
    return (
        <Drawer.Navigator initialRouteName={"home"} drawerPosition={'right'} drawerType={'slide'}>
            <Drawer.Screen name={"RightSide"} component={Characteristic}/>
            <Drawer.Screen name={"Inventory"} component={Inventory}/>
            <Drawer.Screen name={"Todo"} component={Todo}/>
        </Drawer.Navigator>
    );
}
