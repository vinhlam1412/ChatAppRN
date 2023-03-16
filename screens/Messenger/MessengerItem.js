import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';


import { images, icons, Icons, colors, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import { UIHeader } from "../../components"
import { screenWidth } from '../../ulities/Device';
function MessengerItem(props) {
    const { onPress } = props
    const { url, isSender, messenger, timestamp, showUrl } = props.item
    return (isSender == false ? <TouchableOpacity
        onPress={onPress}
        style={{
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center'
        }}>

        {showUrl == true ? <Image style={{
            width: 40,
            height: 40,
            resizeMode: 'cover',
            borderRadius: 20,
            marginRight: 15,
            marginStart: 10
        }}
            source={{
                uri: url
            }}
        /> : <View style={{
            width: 40,
            height: 40,
            marginRight: 15,
            marginStart: 10
        }}></View>}
        <View style={{
            width: screenWidth * 0.7,
            flexDirection: 'row'
        }}>
            <View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                    backgroundColor: colors.messenger,
                    borderRadius: 10,
                }}>{messenger}</Text>
            </View>
            <View style={{ width: 20 }}></View>
        </View>
    </TouchableOpacity> :

        // isSender == true / User is the right side
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
            <View style={{
                width: screenWidth * 0.7,
                flexDirection: "row",
                justifyContent: 'flex-end'
            }}>
                <View style={{ width: 40 }}></View>
                <View>
                    <Text style={{
                        color: 'black',
                        fontSize: fontSizes.h5,
                        paddingVertical: 5,
                        paddingHorizontal: 7,
                        backgroundColor: colors.messenger,
                        borderRadius: 10,
                    }}>{messenger}</Text>
                </View>

            </View>
            {showUrl == true ? <Image style={{
                width: 40,
                height: 40,
                resizeMode: 'cover',
                borderRadius: 20,
                marginRight: 15,
                marginStart: 10
            }}
                source={{
                    uri: url
                }}
            /> : <View style={{
                width: 40,
                height: 40,
                marginRight: 15,
                marginStart: 10
            }}></View>}

        </TouchableOpacity>
    )
}


export default MessengerItem