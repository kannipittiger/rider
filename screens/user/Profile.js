import { useState, useRef, useEffect } from "react";
import {
    View, Text, FlatList,
    StyleSheet, TextInput, TouchableOpacity,
    Alert, KeyboardAvoidingView, Platform,SafeAreaView
} from 'react-native';

export const Profile = (props) => {
    const navigation = props.nav
    const route = props.route
    const signoutSuccess = () => {
        navigation.navigate('Login')
      }

    return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:2,borderWidth:1,justifyContent:'flex-end',alignItems:'center'}}>
                    <Text style={{fontSize:50,fontWeight:'bold'}}>Profile</Text>
                </View>
                <View style={{ flex: 2 }} />
                <View style={[{ flex: 5, marginHorizontal: 20 ,borderWidth:1}]}>
                    <TextInput placeholder='Firstname' secureTextEntry={false} style={{flex:1,borderWidth:1,paddingLeft:40}} />
                    <TextInput placeholder='Lastname' secureTextEntry={false} style={{flex:1,borderWidth:1,paddingLeft:40}} />
                    <TextInput placeholder='username' secureTextEntry={false} style={{flex:1,borderWidth:1,paddingLeft:40}} />
                    <TextInput placeholder='earning' secureTextEntry={false} style={{flex:1,borderWidth:1,paddingLeft:40}} />
                    <View style={{flex:1}} />
                    <View style={{ flex: 2, borderWidth: 0, justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', borderRadius: 40, marginVertical: 20 }}
                            onPress={signoutSuccess}
                        >
                            <Text style={{ fontSize: 20 }}>Sign out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', borderRadius: 40, marginBottom: 0 }}
                            
                        >
                            <Text style={{ fontSize: 20 }}>Go to Splash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 2 }}></View>
            </SafeAreaView>
    )
}