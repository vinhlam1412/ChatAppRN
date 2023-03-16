import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';


import { images, icons, Icons, colors, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import { UIHeader } from "../../components"
function ChatItem(props) {
    let {
        name,
        url,
        message,
        numberofUnredMessages,
    } = props.user
    const { onPress } = props
    return (<TouchableOpacity
        onPress={onPress}
        style={{
            height: 80,
            paddingTop: 20,
            paddingStart: 10,
            flexDirection: 'row'
        }}>

        <View>
            <Image style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 25,
                marginRight: 15,
                marginStart: 10
            }}
                source={{
                    uri: url
                }}
            />
            {numberofUnredMessages > 0 && <Text style={{
                backgroundColor: 'red',
                position: 'absolute',
                right: 7,
                borderRadius: 10,
                paddingHorizontal: numberofUnredMessages > 9 ? 2 : 4,
                color: 'white',
                fontSize: fontSizes.h5 * 0.9

            }}>{numberofUnredMessages <= 99 ? numberofUnredMessages : '99+'}</Text>}
        </View>
        <View style={{
            flexDirection: 'column',
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h5,
                fontWeight: 'bold',
            }}>{name}</Text>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: colors.inactive,
            }}>{message}</Text>
        </View>

        <View style={{
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginRight: 10
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h5 * 0.8,
            }}>4 minute ago</Text>
        </View>
    </TouchableOpacity>)
}


export default ChatItem