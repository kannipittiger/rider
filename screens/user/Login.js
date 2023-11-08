import {View,Text,Image,TouchableOpacity,Alert, TextInput,SafeAreaView} from 'react-native'
import { useState } from 'react'
import {signInEmailPass} from '../../firebase/AuthModel'


export const Login = (props) => {
    const navigation = props.nav
    const route = props.route
    const LOGO = {uri : ''}

    const GotoBottom = () => {
        navigation.navigate('Bottom')
    }

    const GotoRegister = () => {
        navigation.navigate('Register')
    }

    const [credential,setCredential] = useState({username:'',password:''})
  const setUsername = (text) => {
    setCredential(oldValue => ({
      ...oldValue,
      username:text
    }))
  }

  const setPassword = (text) => {
    setCredential(oldValue => ({
      ...oldValue,
      password:text
    }))
  }
  
  const success = (item) => {
    navigation.navigate({
      name:'Bottom',
      params: {
        username:item.username
      }
    })
  }

  const unsuccess = (msg) => {
    console.log(msg)
    Alert.alert(msg)
  }

  const onSignInPress = () => {
    
    /*if(authList.length > 0){
      let user = authList.find((item) => {
        return item.username == credential.username && item.password == credential.password
      })
      console.log(`user: ${user}`)
      if(user != undefined)
        success(user)
      else
        unsuccess('Wrong username or password')
    }else{
      unsuccess(`No user in system yet`)
    }*/
    signInEmailPass(credential.username,credential.password,success,unsuccess)
    navigation.navigate('Bottom')
  }

  const onForgotPress = () => {
    navigation.push('Recover')
  }

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white',borderWidth:1}}>
            <View style={{flex:1,borderWidth:1}}/>
            <View style={{flex:5,borderWidth:1,borderRadius:50,marginHorizontal:30}}>

            </View>
            <View style={{flex:1}} />
            <View style={{flex:3,borderWidth:0}}>
                <TextInput placeholder='Username' secureTextEntry={false}  style={{flex:1,borderWidth:1,paddingLeft:40,borderRadius:100,marginHorizontal:80,fontSize:25}} value={credential.username} onChangeText={(text) => setUsername(text)} />
                <TextInput placeholder='Password' secureTextEntry={true} style={{flex:1,borderWidth:1,paddingLeft:40,borderRadius:100,marginHorizontal:80,marginTop:20,fontSize:25}} value={credential.password} onChangeText={(text) => setPassword(text)} />
            </View>
            <View style={{flex:0.5}} />
            <View style={{flex:2,flexDirection:'row',borderWidth:1}}>
                <TouchableOpacity 
                    style={{flex:1,backgroundColor:'gray',borderWidth:1,borderRadius:100,justifyContent:'center',alignItems:'center',marginVertical:40,marginLeft:40,marginRight:20}}
                    onPress={onSignInPress}>
                    <Text style={{fontSize:30,fontWeight:'bold'}} >Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{flex:1,backgroundColor:'gray',borderWidth:1,borderRadius:100,justifyContent:'center',alignItems:'center',marginVertical:40,marginLeft:20,marginRight:40}}
                    onPress={GotoRegister}>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
            <View style={{flex:1}} />
        </SafeAreaView>
    )
}  