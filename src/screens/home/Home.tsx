import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {stylesHome} from "./stylesHome";


export const Characteristic = () => {
    return (
        <View style={stylesHome.container}>
            <ScrollView style={stylesHome.container} contentContainerStyle={stylesHome.contentContainer}>
                <View style={stylesHome.welcomeContainer}>
                    <Image
                        source={
                            __DEV__ ? require('../../assets/images/robot-dev.png') : require('../../assets/images/robot-prod.png')
                        }
                        style={stylesHome.welcomeImage}
                    />
                </View>

                <View style={stylesHome.getStartedContainer}>
                    <DevelopmentModeNotice/>

                    <Text style={stylesHome.getStartedText}>Open up the code for this screen:</Text>

                    <View style={[stylesHome.codeHighlightContainer, stylesHome.homeScreenFilename]}>
                        <Text>screens/HomeScreen.js</Text>
                    </View>

                    <Text style={stylesHome.getStartedText}>
                        Тут надо основные характеристики распихать персонажа
                    </Text>
                </View>

                <View style={stylesHome.helpContainer}>
                    <TouchableOpacity style={stylesHome.helpLink}>
                        <Text style={stylesHome.helpLinkText}>Help, it didn’t automatically reload!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )

};

function DevelopmentModeNotice() {
    if (__DEV__) {
        return (
            <Text style={stylesHome.developmentModeText}>
                Development mode is enabled: your app will be slower but you can use useful development
                tools.
            </Text>
        );
    } else {
        return (
            <Text style={stylesHome.developmentModeText}>
                You are not in development mode: your app will run at full speed.
            </Text>
        );
    }
}
