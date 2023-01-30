import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Play from '../screens/Play';
import Pause from '../screens/Pause';
import Next from '../screens/Next';
import { useNavigation } from '@react-navigation/native';

const Player = () => {
  const navigation = useNavigation();
  return (
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate('Play')}><Text>Play</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Pause')}><Text>Pause</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Next')}><Text>Next</Text></TouchableOpacity>
   </View>
  )
}

export default Player