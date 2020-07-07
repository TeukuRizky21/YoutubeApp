import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from "@react-navigation/native";
import Constant from 'expo-constants'
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { color } = useTheme()
    const currentTheme = useSelector(state => {
        return state.darkMode
    })
    const myColor = color.iconColor

    return (
        <View style={{
            marginTop: Constant.statusBarHeight,
            height: 45,
            backgroundColor: color.headerColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 4
        }}>
            <View style={{
                flexDirection: 'row',
                margin: 5
            }}>
                <AntDesign style={{
                    marginLeft: 10
                }} name='youtube' size={28} color='purple' />
                <Text style={{
                    fontSize: 22,
                    marginLeft: 5,
                    color: myColor,
                    fontWeight: 'bold'
                }}>TRXTube</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-around",
                width: 150,
                marginTop: 5
            }}>
                <Ionicons name='md-videocam' size={28} color={myColor} />
                <Ionicons name='md-search' size={28} color={myColor}
                    onPress={() => navigation.navigate('search')}
                />
                <MaterialIcons name='account-circle' size={28} color={myColor}
                    onPress={() => dispatch({ type: 'changeTheme', payload: !currentTheme })}
                />
            </View>
        </View>
    );
}