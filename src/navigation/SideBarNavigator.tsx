import * as React from "react";
import {View} from "react-native";
import {Button, Header, Icon, Text} from "react-native-elements";


export const SideBarNavigator = ({navigation, style}: { navigation: any, style: any }) => {
    return <View style={style}>
        <SideBarHeader/>
        <Button title={"Todo"} onPress={() => navigation.navigate('Todo')} icon={() => <Icon name={'settings'}/>}/>
        <Button title={"Inventory"} onPress={() => navigation.navigate('Inventory')}
                icon={() => <Icon name={'settings'}/>}/>
    </View>
}

const SideBarHeader = () => {
    return <Header>
        <Text style={{width: 250,}}> Тут надо ник Игрока написать</Text>
    </Header>
}
