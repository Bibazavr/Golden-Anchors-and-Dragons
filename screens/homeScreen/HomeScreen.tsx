import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {createDrawerNavigator} from "@react-navigation/drawer";

import {stylesHomeScreen} from "./homeScreen";

import {Inventory} from "./inventoryScreen/InventoryScreen";


const Drawer = createDrawerNavigator();

const Characteristic = () => {
    return (
        <View style={stylesHomeScreen.container}>
            <ScrollView style={stylesHomeScreen.container} contentContainerStyle={stylesHomeScreen.contentContainer}>
                <View style={stylesHomeScreen.welcomeContainer}>
                    <Image
                        source={
                            __DEV__ ? require('../../assets/images/robot-dev.png') : require('../../assets/images/robot-prod.png')
                        }
                        style={stylesHomeScreen.welcomeImage}
                    />
                </View>

                <View style={stylesHomeScreen.getStartedContainer}>
                    <DevelopmentModeNotice/>

                    <Text style={stylesHomeScreen.getStartedText}>Open up the code for this screen:</Text>

                    <View style={[stylesHomeScreen.codeHighlightContainer, stylesHomeScreen.homeScreenFilename]}>
                        <Text>screens/HomeScreen.js</Text>
                    </View>

                    <Text style={stylesHomeScreen.getStartedText}>
                        Тут надо основные характеристики распихать персонажа
                    </Text>
                </View>

                <View style={stylesHomeScreen.helpContainer}>
                    <TouchableOpacity style={stylesHomeScreen.helpLink}>
                        <Text style={stylesHomeScreen.helpLinkText}>Help, it didn’t automatically reload!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )

};

export default function HomeScreen() {
    return (
        <Drawer.Navigator initialRouteName={"home"}>
            <Drawer.Screen name={"Home"} component={Characteristic}/>
            <Drawer.Screen name={"Inventory"} component={Inventory}/>
        </Drawer.Navigator>
    );
}

function DevelopmentModeNotice() {
    if (__DEV__) {
        return (
            <Text style={stylesHomeScreen.developmentModeText}>
                Development mode is enabled: your app will be slower but you can use useful development
                tools.
            </Text>
        );
    } else {
        return (
            <Text style={stylesHomeScreen.developmentModeText}>
                You are not in development mode: your app will run at full speed.
            </Text>
        );
    }
}
