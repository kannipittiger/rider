import React from 'react';
import {View, Text, Alert, Image,TouchableOpacity,TextInput,SafeAreaView} from 'react-native'
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

const LOCATION_TRACKING = 'location-tracking';
var l1;
var l2;

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
    if (error) {
        console.log('LOCATION_TRACKING task ERROR:', error);
        return;
    }
    if (data) {
        const { locations } = data;
        let lat = locations[0].coords.latitude;
        let long = locations[0].coords.longitude;

        l1 = lat;
        l2 = long;
        console.log(String(l2));
        console.log(
            `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
        );
    }
});

export const Map = (props) => {
    const navigation = props.nav
    const route = props.route
    const MARK = {uri:'https://i.ibb.co/27MfGQf/bike.png'}
    const origin = {latitude: 13.1279678, longitude:100.9547501};
    const destination = {latitude: 13.07913, longitude: 101.93422};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBQPDdg96BpVWwHmkiTIr3LpjLu4CshNgQ';

    const [locationStarted, setLocationStarted] = React.useState(false);

    const startLocationTracking = async () => {
        await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
            accuracy: Location.Accuracy.Highest,
            timeInterval: 5000,
            distanceInterval: 0,
        });
        const hasStarted = await Location.hasStartedLocationUpdatesAsync(
            LOCATION_TRACKING
        );
        setLocationStarted(hasStarted);
        console.log('tracking started?', hasStarted);
    };

    React.useEffect(() => {
        const config = async () => {
            let resf = await Location.requestForegroundPermissionsAsync();
            let resb = await Location.requestBackgroundPermissionsAsync();
            if (resf.status != 'granted' && resb.status !== 'granted') {
                console.log('Permission to access location was denied');
            } else {
                console.log('Permission to access location granted');
            }
        };

        config();
        startLocationTracking();
    }, []);
    

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
                        strokeWidth={3}
                        strokeColor="hotpink"
                    />
                    <Marker
                        coordinate={{latitude:13.11374,longitude:100.92262}}
                    >
                    </Marker>
                    <Marker
                        coordinate={{latitude:13.07913,longitude:101.93422}}
                    >
                    </Marker>
                </MapView>
            </View>
        </View>
    )
}