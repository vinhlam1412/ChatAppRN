import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlastList
} from 'react-native'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackRouter } from '@react-navigation/routers';
import { Messenger } from '../screens'
import { Login, Welcome, Register, Settings } from '../screens'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from "@react-navigation/drawer"
import UITab from "./UITab"

const Stack = createNativeStackNavigator()

function App(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Welcome"} component={Welcome}></Stack.Screen>
            <Stack.Screen name={"Register"} component={Register}></Stack.Screen>
            <Stack.Screen name={"Login"} component={Login}></Stack.Screen>
            <Stack.Screen name={"Messenger"} component={Messenger}></Stack.Screen>
            <Stack.Screen name={"Settings"} component={Settings}></Stack.Screen>
            <Stack.Screen name={"UITab"} component={UITab}></Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
}

export default App