import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import { colors, fontSizes } from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';

function UIHeader(props) {
    const { title,
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon,
    } = props;
    return <View style={{
        height: 55,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
        {leftIconName != undefined ? <Icon
            name={leftIconName}
            style={{ padding: 10 }}
            size={25} color={'white'}
            onPress={onPressLeftIcon}
        /> : <View style={{ width: 50, height: 50 }}></View>}

        <Text style={{
            fontSize: fontSizes.h6,
            alignSelf: 'center',
            lineHeight: 45,
            color: 'white',

        }}>{title}</Text>

        {rightIconName != undefined ? <Icon
            name={rightIconName}
            style={{ padding: 10 }}
            size={25} color={'white'}
            onPress={onPressRightIcon}
        /> : <View style={{ width: 50, height: 50 }}></View>}

    </View>
}

export default UIHeader 