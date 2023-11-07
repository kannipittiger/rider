import {View, Text, Alert, Image,TouchableOpacity,TextInput,SafeAreaView} from 'react-native'
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';

export const Map = (props) => {
    const navigation = props.nav
    const route = props.route
    const MARK = {uri:'https://i.ibb.co/27MfGQf/bike.png'}
    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};
    const GOOGLE_MAPS_APIKEY = '…';

    return(
        <View style={{flex:1,}}>
            <View style={{flex:9,borderWidth:1}}>
                <MapView 
                    style={{flex:1}}
                    provider = {PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude:13.081736,
                        longitude:100.967467,
                        latitudeDelta: 1.5,
                        longitudeDelta: 1.5,
                    }} 
                    >
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                    />
                    {/* <Marker
                        coordinate={{latitude:13.081736,longitude:100.967467}}
                    >
                        <Image style={{width:100,height:100,resizeMode:'contain'}} source={MARK} />
                    </Marker> */}
                </MapView>
            </View>
        </View>
    )
}