import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Button} from "react-native-elements";

import {diceDrop} from "../utils/dice";


export const Dice10 = () => {
    const [value, setValue] = React.useState<number>(diceDrop(10));

    const drop = () => setValue(diceDrop(10));

    return <View style={stylesDices.container}>
        <Button title={value.toString()} style={stylesDices.dice10} onPress={drop}/>
    </View>
};

const stylesDices = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
    },
    dice10: {
        backgroundColor: '#fff',
    },
});
