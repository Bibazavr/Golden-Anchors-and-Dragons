import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {InitialState, NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from "expo";

import useLinking from "./navigation/useLinking";
import BottomTabNavigator from './navigation/BottomTabNavigator';
import * as Font from 'expo-font';


const Stack = createStackNavigator();

export default function App() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState<InitialState>();
    const containerRef = React.useRef<NavigationContainerRef>(null);
    const {getInitialState} = useLinking(containerRef);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {

                SplashScreen.preventAutoHide();
                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                await Font.loadAsync({
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                    'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
                });

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
