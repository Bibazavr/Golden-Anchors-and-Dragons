import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {InitialState, NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from "expo";
import * as Font from 'expo-font';
import {Audio} from "expo-av";

import useLinking from "./src/navigation/useLinking";
import BottomTabNavigator from './src/navigation/BottomTabNavigator';


const Stack = createStackNavigator();

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
                    'Material Icons': require('react-native-vector-icons/Fonts/MaterialIcons.ttf'),
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
                    <Stack.Navigator>
                        <Stack.Screen name="Root" component={BottomTabNavigator}/>
                    </Stack.Navigator>
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
