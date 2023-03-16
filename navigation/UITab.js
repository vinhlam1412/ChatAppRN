import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chat, Settings } from '../screens'
import { colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5';

const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarIcon: ({ focused, color, size }) => {

        return <Icon name={route.name == "ProductGridView" ? "align-center" :
            (route.name == "Foodlist" ? "accusoft" : (
                route.name == "Chat" ? "rocketchat" : (route.name == "Settings" ? "hammer" : ((route.name == "Profile" ? "user" : "")))
            ))}
            size={25}
            color={focused ? 'white' : colors.inactive} ></Icon>
    }
})

const Tab = createBottomTabNavigator()
function UITab(props) {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
            name={"Chat"}
            component={Chat}
            options={{
                tabBarLabel: "Chat"
            }}
        ></Tab.Screen>
        <Tab.Screen name={"ProductGridView"}
            component={Chat}
            options={{
                tabBarLabel: "Product"
            }}></Tab.Screen>
        <Tab.Screen name={"Foodlist"}
            component={Chat}
            options={{
                tabBarLabel: "Food"
            }}></Tab.Screen>
        <Tab.Screen name={"Settings"}
            component={Settings}
            options={{
                tabBarLabel: "Settings"
            }}></Tab.Screen>
        <Tab.Screen name={"Profile"}
            component={Settings}
            options={{
                tabBarLabel: "Profile"
            }}></Tab.Screen>
    </Tab.Navigator>
}
export default UITab
