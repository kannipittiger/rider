import {View, Text, Alert, Image,TouchableOpacity,TextInput,SafeAreaView} from 'react-native'
import MapView from 'react-native-maps';

export const Map = (props) => {
    const navigation = props.nav
    const route = props.route
    return(
        <View style={{flex:1,}}>
            <View style={{flex:9,borderWidth:1}}>
                <MapView style={{flex:1}} />
            </View>
        </View>
    )
}