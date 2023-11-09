import { Profile } from "../user/Profile";
import { Chat } from "../work/Chat";
import { Map } from "../work/Map";
import {MaterialCommunityIcons,Ionicons,Feather,FontAwesome5,AntDesign} from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Bottom = createBottomTabNavigator();

const ChatScreen = ({ navigation, route }) => {
    return (
        <Chat nav={navigation} route={route}/>
    )
}

const ProfileScreen = ({ navigation, route }) => {
    return (
        <Profile nav={navigation} route={route}/>
    )
}

const MapScreen = ({ navigation, route }) => {
    return (
      <Map nav={navigation} route={route}/>
    )
  }

export const BottomNav = () => {
    return(
        <Bottom.Navigator screenOptions={{
            tabBarLabelStyle:{fontSize:20,fontWeight:'bold'},
            tabBarStyle: { position: 'absolute' ,height:90},
            tabBarActiveTintColor: '#FF914D',
          tabBarInactiveTintColor: 'gray',}}>
            <Bottom.Screen name="Map" 
                component={MapScreen} 
                options={{ headerShown: false,
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color }) => (
                      <Feather name="map" color={color} size={40} />
                    ), }}/>
            <Bottom.Screen name="Profile" 
                component={ProfileScreen} 
                options={{ headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-circle" color={color} size={40} />
                      ), }}/>
            <Bottom.Screen name="Chat" 
                component={ChatScreen} 
                options={{ headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="wechat" color={color} size={50} />),
                         }} />
        </Bottom.Navigator>
    )
}

