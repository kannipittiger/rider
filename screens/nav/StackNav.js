import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Login} from '../user/Login'
import {Profile} from '../user/Profile'
import { Register } from '../user/Register'
import { Chat } from '../work/Chat'
import { Map } from '../work/Map'
import { BottomNav } from './BottomNav'

const Stack = createNativeStackNavigator()

const LoginScreen = ({ navigation, route }) => {
  return (
    <Login nav={navigation} route={route}/>
  )
}



const RegisterScreen = ({ navigation, route }) => {
  return (
    <Register nav={navigation} route={route}/>
  )
}

const MainBottom = ({ navigation, route }) => {
  return (
    <BottomNav nav={navigation} route={route}/>
  )
}

export const StackNav = () => {
    return (
      <Stack.Navigator
        screenOptions={
          { headerShown: false }
        }
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Bottom" component={MainBottom} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }