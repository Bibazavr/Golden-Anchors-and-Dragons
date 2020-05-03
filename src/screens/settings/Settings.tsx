import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";


export const Settings = () => {
    return <View style={stylesSettings.container}>
        <Text>Settings</Text>
    </View>
}

const stylesSettings = StyleSheet.create({
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
