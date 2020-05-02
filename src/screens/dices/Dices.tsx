import * as React from "react";
import {StyleSheet, View} from "react-native";

import {Dices} from "./components/Dices";


export const DiceScreen = () => {
    return (
        <View style={stylesDiceScreen.container}>
            <Dices/>
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
