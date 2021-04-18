import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Login from '../screens/Login';
import SingUp from '../screens/SingUp';
import OtpVerify from '../screens/OtpVerify';

const Stack = createStackNavigator();

function Mainstack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  );
}

function Authstack() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='OtpVerify' component={OtpVerify} />
      <Stack.Screen name='SingUp' component={SingUp} />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  const isLogin = useSelector(state => state.auth.isLogin);

  return isLogin ? (
    <NavigationContainer>
      <Mainstack />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Authstack />
    </NavigationContainer>
  );
}
