import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Play from '../screens/Play';
import Pause from '../screens/Pause';
import Next from '../screens/Next';

const Player = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Play" component={Play}/>
        <Tab.Screen name="Pause" component={Pause}/>
        <Tab.Screen name="Next" component={Next}/>
    </Tab.Navigator>
  )
}

export default Player