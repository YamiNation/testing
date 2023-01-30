import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const BottomTabNav = (navigation) => {
  return (
   <View>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Text></Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}><Text>Notifications</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}><Text>Profile</Text></TouchableOpacity>
   </View>
  )
}

export default BottomTabNav