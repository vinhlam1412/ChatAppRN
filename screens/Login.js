import React, { useState, useEffect } from 'react';
import {
    Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from 'react-native';


import { images, icons, Icons, colors, fontSizes } from '../constants';
import { UIButton } from '../components'
import icon from '../constants/icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { isValidEmail, isValidPassword } from '../ulities/Validations';
import {
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    auth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from '../firesbase/firebase'
function Login(props) {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false)

    //state for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //state to store email/password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationOK = () => email.length > 0 && password.length > 0
        && isValidEmail(email) == true
        && isValidPassword(password) == true


    useEffect(() => {
        //componentDidMount
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsShown(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShown(false)
        })
    })
    const { navigation, route } = props
    const { navigate, goBack } = navigation

    return <KeyboardAvoidingView
        style={{
            flex: 100,
            backgroundColor: 'white',
        }}>
        <View style={{
            flex: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h2,
                fontWeight: 'bold',
                width: '50%'
            }}>Already have an Account?</Text>
            <Image
                tintColor={colors.primary}
                source={
                    images.computer
                }
                style={{
                    width: 120,
                    height: 120,
                    alignSelf: 'center'
                }}
            />
        </View>
        <View style={{
            flex: 30,
        }}>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    fontSize: fontSizes.h5,
                    color: colors.primary,
                }}>Email:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorEmail(isValidEmail(text) == true ? '' : 'Email not in correct format')
                        setEmail(text)
                    }}
                    style={{
                        color: 'black',
                    }} placeholder='example@gmail.com'
                    placeholderTextColor={colors.placeholder}
                />
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '100%',
                    marginBottom: 5,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }}></View>
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h5,
                    marginBottom: 10,
                }}>{errorEmail}</Text>
            </View>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    fontSize: fontSizes.h5,
                    color: colors.primary,
                }}>Password:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? '' : 'Password must be at least 3 characters')
                    }}
                    style={{
                        color: 'black',
                    }}
                    secureTextEntry={true}
                    placeholder='Enter your password'
                    placeholderTextColor={colors.placeholder}
                />
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '100%',
                    marginBottom: 10,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }}></View>
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h5,
                    marginBottom: 10,
                }}>{errorPassword}</Text>
            </View>
        </View>
        {keyboardIsShown == false ? <View style={{
            flex: 15,
        }}>
            <TouchableOpacity
                disabled={isValidationOK() == true}
                onPress={() => {
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCreadential) => {
                            const user = userCreadential.user
                            navigate("UITab")
                        }).catch((error) => {
                            alert(`Cannot signin, error:${error.message}`)
                        })
                }} style={{
                    backgroundColor: isValidationOK() == true ? colors.primary : colors.inactive,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    alignSelf: 'center',
                    borderRadius: 25
                }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h4,
                    color: 'white',
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate("Register")
            }} style={{
                padding: 5
            }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h4,
                    color: colors.primary,
                    alignSelf: 'center',
                }}>New user? Register now</Text>
            </TouchableOpacity>
        </View> : <View style={{
            flex: 15,
        }}></View>}

        {keyboardIsShown == false ? <View style={{
            flex: 25,
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20
            }}>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h4,
                    color: 'black',
                    alignSelf: 'center',
                    marginHorizontal: 5
                }}>Use other methods</Text>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Icon name="facebook" size={40} color={colors.facebook}></Icon>
                <View style={{ width: 15 }}></View>
                <Icon name="google" size={40} color={colors.google}></Icon>
            </View>

        </View> : <View style={{
            flex: 25,
        }}></View>}
    </KeyboardAvoidingView>
}
export default Login