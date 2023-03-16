import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';


import { images, icons, Icons, colors, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import { UIHeader } from "../../components"
import ChatItem from './ChatItem';
import App from '../../navigation/App';
import {
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    auth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    child,
    get,
    onValue,
} from '../../firesbase/firebase'

function Chat(props) {

    const [users, setUsers] = useState([
        // {
        //     url: 'https://randomuser.me/api/portraits/men/22.jpg',
        //     name: 'Jok Mak',
        //     message: 'Hello, how are you?',
        //     numberofUnredMessages: 8,
        // }
    ])
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), (snapshot) => {
            if (snapshot.exists()) {
                let value = snapshot.val()
                setUsers(Object.values(value).map(eachObject => {
                    return {
                        //default profile url
                        url: 'https://randomuser.me/api/portraits/men/22.jpg',
                        name: eachObject.email,
                        email: eachObject.email,
                        accessTokentoken: eachObject.accessToken,
                        numberofUnredMessages: 0,
                    }
                }))
            } else {
                console.log('No data available')
            }
        })
    }, [])

    return <View style={{
        flexDirection: 'column',
    }}>
        <UIHeader title={"Notifications"}
            leftIconName={"arrowleft"}
            rightIconName={"search1"}
            onPressLeftIcon={() => {
                alert("left icon")
            }}
            onPressRightIcon={() => {
                alert("right icon")
            }}
        ></UIHeader>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginStart: 10
        }}>

            <Text style={{
                color: 'black',
                fontSize: fontSizes.h5,
                marginStart: 10

            }}>6 unred message</Text>
            <Icon
                name={"search1"}
                style={{ padding: 15 }}
                size={15} color={'black'}
                onPress={() => {
                    alert('cc')
                }}
            />
        </View>
        <FlatList style={{
        }}
            data={users}
            renderItem={({ item }) => <ChatItem
                onPress={() => {
                    navigate('Messenger', { user: item })
                }}
                user={item} key={item.url} />}
        />
    </View>
}

export default Chat
