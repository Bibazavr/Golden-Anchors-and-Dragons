import * as React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {RectButton, ScrollView} from 'react-native-gesture-handler';

export default function Links() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <OptionButton
                icon="md-school"
                label="Read the Expo documentation"
                onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
                isLastOption={false}
            />

            <OptionButton
                icon="md-compass"
                label="Read the React Navigation documentation"
                onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
                isLastOption={false}
            />

            <OptionButton
                icon="ios-chatboxes"
                label="Ask a question on the forums"
                onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
                isLastOption
            />
        </ScrollView>
    );
}

interface OptionButtonProps {
    icon: string,
    label: string,
    onPress: () => void,
    isLastOption: boolean,
}

function OptionButton({label, onPress, isLastOption}: OptionButtonProps) {
    return (
        <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.optionIconContainer}>
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>{label}</Text>
                </View>
            </View>
        </RectButton>
    );
}

type LocalStyle = {
    optionTextContainer: ViewStyle,
    container: ViewStyle,
    contentContainer: ViewStyle,
    optionIconContainer: ViewStyle,
    option: ViewStyle,
    lastOption: ViewStyle,
    optionText: TextStyle
}

const styles = StyleSheet.create<LocalStyle>({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    optionTextContainer: {
        color: "#f5f5f5"
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
});
