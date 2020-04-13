import * as React from "react";
import {Text, View} from "react-native";

import {stylesDiceScreen} from "./stylesDiceScreen"

export const DiceScreen = () => {
    return (
        <View style={stylesDiceScreen.container}>
            <Text>DICE</Text>
        </View>
    )
}