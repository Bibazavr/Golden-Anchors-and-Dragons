import * as React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Header, Icon, ListItem, Text} from "react-native-elements";


export const SideBarNavigator = ({navigation}: { navigation: any }) => {
    const list: { name: string, icon: string }[] = [
        {
            name: 'Todo',
            icon: 'dashboard',
        },
        {
            name: 'Inventory',
            icon: 'rowing',
        }
    ];

    return <View style={stylesSideBarNavigator.container}>
        <SideBarHeader/>
        <ScrollView>
            {list.map((item) => <ListItem
                key={item.name}
                title={item.name}
                leftIcon={<Icon name={item.icon}/>}
                onPress={() => navigation.navigate(item.name)}
                />
            )}
        </ScrollView>
        <ListItem
            key={'Settings'}
            title={'Settings'}
            onPress={() => navigation.navigate('Settings')}
            leftIcon={<Icon name={'settings'}/>}
            topDivider
        />
    </View>
}

const SideBarHeader = () => {
    return <Header containerStyle={stylesSideBarNavigator.header}
                   leftComponent={<Text style={{fontSize: 15}}>GA&D</Text>}
                   centerComponent={<Text style={{fontSize: 30}}>Bibazavr</Text>}
    />
}


const stylesSideBarNavigator = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#ffffff'
    }
});
