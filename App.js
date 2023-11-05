import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './screens/user/Login';
import {Profile} from './screens/user/Profile';
import { Register } from './screens/user/Register';
import { Chat } from './screens/work/Chat';
import { StackNav } from './screens/nav/StackNav';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
