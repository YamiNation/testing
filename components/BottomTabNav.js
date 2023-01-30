import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Notifications" component={Notifications} />
   </Tab.Navigator>
  )
}

export default BottomTabNav