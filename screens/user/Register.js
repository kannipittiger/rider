import {View, Text, Alert, Image,TouchableOpacity,TextInput,SafeAreaView} from 'react-native'

export const Register = (props) => {
    const navigation = props.nav
    const route = props.route
    const LOGO = {uri : 'https://i.ibb.co/WFDHX2x/kannipit.png'}
    return(
        <SafeAreaView style={{flex:1}}>
          <View style={{ flex: 1 }}></View>
          <View style={[{ flex: 9 }]}>
            <View style={{ flex: 3, flexDirection: 'row', paddingLeft: 5, borderWidth: 1, alignItems: 'center' }}>
              <Image source={LOGO} style={{ flex: 2, alignItems: 'center', width: '100%', height: '80%', borderWidth: 0 }} />
              <Text style={{ flex: 5, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 30, paddingLeft: 10 }}>Registration</Text>
            </View>
            <TextInput placeholder='Firstname' secureTextEntry={false}  />
            <TextInput placeholder='Lastname' secureTextEntry={false}  />
            <TextInput placeholder='StudentID' secureTextEntry={false}  />
            <TextInput placeholder='Username' secureTextEntry={false} />
            <TextInput placeholder='Password' secureTextEntry={true} />
            <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 5, borderWidth: 0, justifyContent: 'center' }}>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', borderRadius: 40 }}
              >
                <Text style={{ fontSize: 20 }}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 10, justifyContent: 'center' }}>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', borderRadius: 40 }}
              >

                <Text style={{ fontSize: 20 }}>Cancel</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ flex: 1 }}></View>
        </SafeAreaView>
    )
}