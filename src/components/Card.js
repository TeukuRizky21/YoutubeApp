import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'

const Card = (props) => {

    const {color} = useTheme()
    const mycolor = '#212121'
    const textColor = color.iconColor
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('videoPlayer', { videoId: props.videoId, title: props.title })}
        >
            <View style={{
                marginBottom: 10
            }}>
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={{
                        width: '100%',
                        height: 200
                    }}
                />
                <View style={{
                    flexDirection: 'row'
                }}>
                    <MaterialIcons style={{
                        marginTop: 5
                    }} name='account-circle' size={40} color={mycolor} />
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: textColor,
                            width: Dimensions.get('screen').width - 50,
                            margin: 5
                        }}
                            ellipsizeMode='tail' numberOfLines={2} >
                            {props.title}</Text>
                        <Text style={{
                            color: textColor
                        }}>{props.channel}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card