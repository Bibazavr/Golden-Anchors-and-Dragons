import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {InitialState, NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from "expo";
import * as Font from 'expo-font';
import {Audio} from "expo-av";

import useLinking from "./src/navigation/useLinking";
import {createDrawerNavigator} from "@react-navigation/drawer";
import RightDrawerNavigator from "./src/navigation/RightDrawerNavigator";


const Stack = createStackNavigator();
const RightDrawer = createDrawerNavigator();

export default function App() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState<InitialState>();
    const containerRef = React.useRef<NavigationContainerRef>(null);
    const {getInitialState} = useLinking(containerRef);

    const soundObject = new Audio.Sound();
    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {

                SplashScreen.preventAutoHide();
                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                await Font.loadAsync({
                    'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
                    'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
                    'MaterialIcons': require('react-native-vector-icons/Fonts/MaterialIcons.ttf'),
                });
                // Временная музычка для настроения
                await soundObject.loadAsync(require('./src/assets/sounds/not_your_business.mp3'));
                // await soundObject.playAsync();

            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync().then(() => console.log("all good"));
    }, []);

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                    <RightDrawer.Navigator initialRouteName={"Dices"} drawerPosition={'right'} drawerType={'slide'}
                                           lazy={false}
                                           statusBarAnimation={'slide'}>
                        <RightDrawer.Screen name="BOT" component={RightDrawerNavigator}/>
                    </RightDrawer.Navigator>

                </NavigationContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
