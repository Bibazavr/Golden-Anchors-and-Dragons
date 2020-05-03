import * as React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Header, Icon, ListItem, Text} from "react-native-elements";
import {NavigationProp} from "@react-navigation/core/lib/typescript/src/types";
import {ParamListBase} from "@react-navigation/routers";


export const SideBarNavigator = ({navigation}: { navigation: NavigationProp<ParamListBase>, style: any }) => {
    const list: { name: string }[] = [
        {
            name: 'Todo',
        },
        {
            name: 'Inventory',
        }
    ];

    return <View style={stylesSideBarNavigator.container}>
        <SideBarHeader/>
        <ScrollView>
            {list.map((item) => <ListItem
                    key={item.name}
                    title={item.name}
                    onPress={() => navigation.navigate(item.name)}
                    bottomDivider
                />
            )}
        </ScrollView>
        <ListItem
            key={'Settings'}
            title={'Settings'}
            onPress={() => navigation.navigate('Settings')}
            leftIcon={<Icon name={'settings'}/>}
            bottomDivider
        />
    </View>
}

const SideBarHeader = () => {
    return <Header containerStyle={stylesSideBarNavigator.header}
                   leftComponent={<Text>GA&D</Text>}
                   centerComponent={<Text> Тут надо ник Игрока написать</Text>}
    />
}


const stylesSideBarNavigator = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff'
    }
});
