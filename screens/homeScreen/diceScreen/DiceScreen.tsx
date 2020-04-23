import * as React from "react";
import {StyleSheet, View} from "react-native";

import {Dice10} from "./components/dices";


export const DiceScreen = () => {
    return (
        <View style={stylesDiceScreen.container}>
            <Dice10/>
        </View>
    )
}

const stylesDiceScreen = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
    },
});
