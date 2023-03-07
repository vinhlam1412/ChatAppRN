import React, { useState, useEffect } from 'react';
import { Alert, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { sum2Number } from '../ulities/Caculator';


import { images, icons, Icons, colors, fontSizes } from '../constants';
import { UIButton } from '../components'
import icon from '../constants/icons';
import Icon from 'react-native-vector-icons/AntDesign';

function Welcome(props) {
    //state => when a state is changed => UI is reload

    //like getter/setter
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false
        },
        {
            name: 'Individual',
            isSelected: false
        }
    ])
    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>
                    <Image source={icons.fire}
                        style={{
                            width: 30,
                            height: 30,
                            marginHorizontal: 10,
                        }}
                    ></Image>
                    <Text style={{ color: 'white' }}>YOUR COMPANY.CO</Text>
                    <View style={{ flex: 1 }} />
                    <Icon name={'questioncircleo'}
                        size={20}
                        style={{
                            marginEnd: 20,
                            color: 'white'
                        }}

                    ></Icon>
                </View>
            </View>

            <View style={{
                flex: 20,
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontSize: fontSizes.h5
                }}>Welcome</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: fontSizes.h4
                }}>YOURCOMPANY.CO !</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontSize: fontSizes.h5
                }}>Please select your account type</Text>
            </View>

            <View style={{
                flex: 40,
            }}>
                {accountTypes.map(accountType =>
                    <UIButton onPress={() => {
                        let newAccountTypes = accountTypes.map(eachAccountType => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        })
                        setAccountTypes(newAccountTypes)
                    }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    ></UIButton>)}

            </View>
            <View style={{
                flex: 20,
            }}>
                <UIButton title={'login'.toUpperCase()}></UIButton>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontSize: fontSizes.h5,
                    alignSelf: 'center',
                }}>Want to register new Account ?</Text>
                <TouchableOpacity
                    onPress={() => {
                        alert('Register New Account');
                    }}
                    style={{
                        padding: 5
                    }}>
                    <Text style={{
                        marginBottom: 7,
                        color: colors.primary,
                        fontSize: fontSizes.h5,
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}
export default Welcome