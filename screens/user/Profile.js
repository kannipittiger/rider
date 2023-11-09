import { useState, useRef, useEffect } from "react";
import {
    View, Text, FlatList,
    StyleSheet, TextInput, TouchableOpacity,
    Alert, KeyboardAvoidingView, Platform,SafeAreaView,Image
} from 'react-native';

export const Profile = (props) => {
    const navigation = props.nav
    const route = props.route

    const signoutSuccess = () => {
        navigation.navigate('Login')
      }

    return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:4,borderWidth:0,justifyContent:'flex-end',alignItems:'center'}}>
                    <Image source={require('../../assets/1.png')} style={{ flex: 2, alignItems: 'center', width: '100%', height: '80%', borderRadius: 500 }} />
                    <Text style={{fontSize:60,fontWeight:'bold',color:'#FF914D'}}>Profile</Text>
                </View>
                <View style={[{ flex: 5, marginHorizontal: 20 ,borderWidth:0}]}>
                    <TextInput placeholder='email' secureTextEntry={false} style={{flex:1,borderWidth:1,paddingLeft:40,marginBottom:20,borderRadius:100,marginTop:60,fontSize:20,borderColor:'#FF914D'}} placeholderTextColor={'#FF914D'} color={'#FF914D'} />
                    <TextInput placeholder='username' secureTextEntry={false} style={{flex:1,borderWidth:1,paddingLeft:40,borderRadius:100,fontSize:20,borderColor:'#FF914D'}} placeholderTextColor={'#FF914D'} color={'#FF914D'}/>
                    <View style={{flex:1}} />
                    <View style={{ flex: 2, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ flex: 0.8,width:'50%',height:'50%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF914D', borderRadius: 40, marginVertical: 20 }}
                            onPress={signoutSuccess}
                        >
                            <Text style={{ fontSize: 35,color:'white' ,fontWeight:'bold' }}>Sign out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 2 }}></View>
            </SafeAreaView>
    )
}