import {View,Text,Image,TouchableOpacity,Alert, TextInput,SafeAreaView} from 'react-native'

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

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white',borderWidth:1}}>
            <View style={{flex:1,borderWidth:1}}/>
            <View style={{flex:5,borderWidth:1,borderRadius:50,marginHorizontal:30}}>
                <Image source={LOGO} style={{width:'100%',height:'100%',borderRadius:50}} />
            </View>
            <View style={{flex:1}} />
            <View style={{flex:3,borderWidth:1}}>
                <TextInput placeholder='Username' secureTextEntry={false}  style={{flex:1,borderWidth:1,paddingLeft:40,borderRadius:100,marginHorizontal:80}} />
                <TextInput placeholder='Password' secureTextEntry={true} style={{flex:1,borderWidth:1,paddingLeft:40,borderRadius:100,marginHorizontal:80,marginTop:20}} />
            </View>
            <View style={{flex:0.5}} />
            <View style={{flex:2,borderWidth:1}}>
                <TouchableOpacity 
                    style={{flex:1,backgroundColor:'gray',borderWidth:1,borderRadius:100,justifyContent:'center',alignItems:'center',marginHorizontal:100}}
                    onPress={GotoBottom}>
                    <Text style={{fontSize:30,fontWeight:'bold'}} >Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{flex:1,backgroundColor:'gray',borderWidth:1,borderRadius:100,justifyContent:'center',alignItems:'center',marginHorizontal:100,marginTop:20}}
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