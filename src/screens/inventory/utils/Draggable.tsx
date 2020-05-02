import * as React from "react";
import {Animated, PanResponder, PanResponderInstance, StyleSheet} from "react-native";


export const Draggable = () => {
    const [pan, setPan] = React.useState<Animated.ValueXY>(new Animated.ValueXY());
    const [panResponder, setPanResponder] = React.useState<PanResponderInstance>(
        PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderMove: Animated.event([
                null, {dx: pan.x, dy: pan.y}
            ]),
            onPanResponderRelease: (e, gesture) => {
                Animated.spring(pan, {
                    toValue: {x: 0, y: 0},
                    friction: 5
                }).start();
            }
        })
    );

    const panStyle = {transform: pan.getTranslateTransform()}
    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[panStyle, styles.circle]}
        />
    );
}


let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    },
});