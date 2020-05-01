import * as React from "react";
import {StyleSheet, View} from "react-native";

import {BasicSlot} from "./utils/Modal";


export const InventoryScreen = () => {
    return (
        <View style={stylesInventoryScreen.container}>
            <BasicSlot/>
            <View style={stylesInventoryScreen.middle}>
                <BasicSlot/>
                <BasicSlot/>
                <BasicSlot/>
            </View>
            <BasicSlot/>
            <BasicSlot/>
            <View style={stylesInventoryScreen.middle}>
                <BasicSlot/>
                <BasicSlot/>
            </View>
        </View>
    )
}

const stylesInventoryScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
    },
    middle: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
});
