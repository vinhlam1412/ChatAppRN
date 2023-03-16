import React, { useState, useEffect } from 'react';
import {
    Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View,
    TextInput
} from 'react-native';


import { images, icons, Icons, colors, fontSizes } from '../../constants';
import { UIHeader } from "../../components"
import MessengerItem from './MessengerItem';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Messenger(props) {

    const [typedText, setTypeText] = useState('')

    const [chatHistory, setChatHistory] = useState([
        {
            url: 'https://randomuser.me/api/portraits/men/44.jpg',
            showUrl: true,
            isSender: true,
            messenger: "Hello",
            timestamp: 164165423800,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/44.jpg',
            showUrl: false,
            isSender: true,
            messenger: "How are you?",
            timestamp: 1641654298000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/44.jpg',
            showUrl: false,
            isSender: true,
            messenger: "How about your workdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?",
            timestamp: 1641654538000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/85.jpg',
            showUrl: true,
            isSender: false,
            messenger: "Yes",
            timestamp: 1641654598000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/85.jpg',
            showUrl: false,
            isSender: false,
            messenger: "I am fine",
            timestamp: 1641654598000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/44.jpg',
            showUrl: true,
            isSender: true,
            messenger: "Let's go out",
            timestamp: 1641654778000,
        },
    ])
    const { url, name } = props.route.params.user
    const { navigate, goBack } = props.navigation
    return <View style={{
        flexDirection: 'column',
        flex: 1,
    }}>
        <UIHeader title={name}
            leftIconName={"arrowleft"}
            rightIconName={"bars"}
            onPressLeftIcon={() => {
                goBack()
            }}
            onPressRightIcon={() => {
                alert("right icon")
            }}
        ></UIHeader>


        <FlatList style={{
            flex: 1,
        }}
            data={chatHistory}
            renderItem={({ item }) => <MessengerItem
                onPress={() => {
                    alert('cc')
                }}
                item={item} key={`${item.timestamp}`} />}
        />
        <View style={{
            height: 50,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <TextInput
                onChangeText={(typedText) => {
                    setTypeText(typedText)
                }}
                style={{
                    color: 'black',
                    paddingStart: 10
                }}
                secureTextEntry={true}
                placeholder='Enter your message here'
                value={typedText}
                placeholderTextColor={colors.placeholder}
            />
            <TouchableOpacity onPress={() => {
                if (typedText.trim().length == 0) {
                    return
                }
                let newMessengerObject = {
                    url: 'https://randomuser.me/api/portraits/men/44.jpg',
                    showUrl: true,
                    isSender: true,
                    messenger: typedText,
                    timestamp: (new Date()).getTime()
                }
            }}>
                <Icon
                    style={{
                        padding: 10,
                    }}
                    name="paper-plane" size={25} color={colors.primary} />
            </TouchableOpacity>

        </View>
    </View>
}

export default Messenger
