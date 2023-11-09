import {View, Text, Alert, Image,TouchableOpacity,TextInput,SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth, firestoreDB } from '../../firebase/connect';
import {setDoc} from "firebase/firestore";
import {signUpEmailPass} from '../../firebase/AuthModel'

export const Register = (props) => {
  const navigation = props.nav
  const route = props.route
  const LOGO = {uri : 'https://i.ibb.co/WFDHX2x/kannipit.png'}

  const [profile,setProfile] = useState({'username':'','email':'','password':''})

  const setEmail = (text) => {
      setProfile(oldValue => ({
        ...oldValue,
        email:text
      }))
    }

  const setUsername = (text) => {
    setProfile(oldValue => ({
      ...oldValue,
      username:text
    }))
  }

  const setPassword = (text) => {
    setProfile(oldValue => ({
      ...oldValue,
      password:text
    }))
  }

  const unsuccess = (msg) => {
    console.log(msg)
    Alert.alert(msg)
  }

  const allSuccess = (doc) => {
    Alert.alert(`${doc.email} has been added to system`)
    navigation.goBack()
  }

  const onRegisterPress = () => {
    console.log(`profile ${profile.email}`)
    //dispatch(addProfile(profile))
    //allSuccess(profile)
    signUpEmailPass(profile,allSuccess,unsuccess)
  }

  const onCancelPress = () => {
    navigation.goBack()
  }

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#FF914D'}}>
          <View style={{ flex: 1 }}></View>
          <View style={[{ flex: 9 }]}>
            <View style={{ flex: 3, flexDirection: 'row', paddingLeft: 5, borderWidth: 0, alignItems: 'center' , borderRadius:50}}>
              <Image source={require('../../assets/1.png')} style={{ flex: 2, alignItems: 'center', width: '100%', height: '80%', borderRadius: 500 }} />
              <Text style={{ flex: 5, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 70, paddingLeft: 10,color:'white' }}>Registration</Text>
            </View>
            <TextInput placeholder='Email' secureTextEntry={false} value={profile.email} style={{flex:1,marginHorizontal:30,borderColor:'white', borderWidth: 1,borderRadius:50,paddingLeft:50,marginVertical:10,fontSize:20}} onChangeText={(text) => setEmail(text)} placeholderTextColor={'white'} color={'white'}/>
            <TextInput placeholder='Name' secureTextEntry={false} value={profile.username} style={{flex:1,marginHorizontal:30,borderColor:'white', borderWidth: 1,borderRadius:50,paddingLeft:50,marginBottom:5,fontSize:20}} onChangeText={(text) => setUsername(text)} placeholderTextColor={'white'} color={'white'}/>
            <TextInput placeholder='Password' secureTextEntry={true} value={profile.password} style={{flex:1,marginHorizontal:30,borderColor:'white', borderWidth: 1,borderRadius:50,paddingLeft:50,marginVertical:5,fontSize:20}} onChangeText={(text) => setPassword(text)} placeholderTextColor={'white'} color={'white'}/>
            <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 5, borderWidth: 0, justifyContent: 'center',marginHorizontal:50 }}>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 40 }}
                onPress={onRegisterPress}
              >
                <Text style={{ fontSize: 30,fontWeight:'bold',color:'#FF914D' }}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 10, justifyContent: 'center',marginHorizontal:50 }}>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 40 }}
                onPress={onCancelPress}
              >

                <Text style={{ fontSize: 30,fontWeight:'bold',color:'#FF914D' }}>Cancel</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ flex: 1 }}></View>
        </SafeAreaView>
    )
}