import * as React from "react";
import {StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import {Button, Text} from "react-native-elements";

import {diceDrop} from "../utils/dice";

export const Dice = (props: { facets: number, style?: StyleProp<ViewStyle> }) => {
    const [value, setValue] = React.useState<number>(props.facets);

    const drop = () => setValue(diceDrop(props.facets));

    return <View style={stylesDices.containerDice}>
        <Button title={value.toString()} buttonStyle={[stylesDices.dice, props?.style]} onPress={drop}
                testID={'diceButton'}/>
        <Text>d{props.facets}</Text>
    </View>
}

export const Dices = () => {
    return <View style={stylesDices.container}>
        <Dice facets={4} style={stylesDices.dice4}/>
        <Dice facets={6} style={stylesDices.dice6}/>
        <Dice facets={8} style={stylesDices.dice8}/>
        <Dice facets={10} style={stylesDices.dice10}/>
        <Dice facets={12} style={stylesDices.dice12}/>
        <Dice facets={20} style={stylesDices.dice20}/>
        <Dice facets={100} style={stylesDices.dice100}/>
    </View>
};

const stylesDices = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    containerDice: {
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    dice: {
        height: 50,
        width: 50,
    },
    dice4: {
        backgroundColor: '#7851a9',
    },
    dice6: {
        backgroundColor: '#7851a9',
    },
    dice8: {
        backgroundColor: '#7851a9',
    },
    dice10: {
        backgroundColor: '#7851a9',
    },
    dice12: {
        backgroundColor: '#7851a9',
    },
    dice20: {
        backgroundColor: '#7851a9',
    },
    dice100: {
        backgroundColor: '#7851a9',
    },
});
