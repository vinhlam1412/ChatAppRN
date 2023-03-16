import React, { useState, useEffect } from 'react';
import {
    Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View,
    TextInput,
    Keyboard,
} from 'react-native';
import {
    auth,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    onValue,
} from '../../firesbase/firebase'

import { images, icons, Icons, colors, fontSizes } from '../../constants';
import { UIHeader } from "../../components"
import MessengerItem from './MessengerItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Messenger(props) {

    const [typedText, setTypeText] = useState('')

    const [chatHistory, setChatHistory] = useState([

    ])
    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'chats'), async (snapshot) => {
            if (snapshot.exists()) {
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem('user')
                let myuserId = JSON.parse(stringUser).userId

                let updateChatHistory = Object.keys(snapshotObject)
                    .filter(item => item.includes(myuserId))
                    .map(eachKey => {
                        return {
                            ...snapshotObject[eachKey],
                            isSender: eachKey.split('-')[0] == myuserId,
                        }
                    }).sort((item1, item2) => item1.timestamp - item2.timestamp)
                for (const i = 0; i < updateChatHistory.length; i++) {
                    let item = updateChatHistory[i]
                    item.showUrl = (i == 0) ? true :
                        item.isSender != updateChatHistory[i].isSender
                }
                setChatHistory(updateChatHistory)
            } else {
                console.log('No data available')
            }
        })
    }, [])

    const { url, name, userId } = props.route.params.user
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
                placeholder='Enter your message here'
                value={typedText}
                placeholderTextColor={colors.placeholder}
            />
            <TouchableOpacity onPress={async () => {
                if (typedText.trim().length == 0) {
                    return
                }

                let stringUser = await AsyncStorage.getItem('user')
                let myuserId = JSON.parse(stringUser).userId
                let myFriendUserId = props.route.params.user.userId
                //save to Firebase DB
                let newMessengerObject = {
                    url: 'https://randomuser.me/api/portraits/men/44.jpg',
                    showUrl: true,
                    messenger: typedText,
                    timestamp: (new Date()).getTime()
                }
                Keyboard.dismiss()
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    `chats/${myuserId} - ${myFriendUserId}`
                ), newMessengerObject).then(() => {
                    setTypeText('')
                })
                //"id1-id2: {messenger object}"
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
