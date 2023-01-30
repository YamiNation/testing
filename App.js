import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Button, TouchableOpacity } from "react-native";
import BottomTabNav from "./components/BottomTabNav";
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Player from ".//components/Player";


export default function App() {
  const [menu, setMenu] = useState(true);
  return (
 <NavigationContainer>
    {menu && <BottomTabNav/>}
    {menu ? <BottomTabNav/> : <Player/>}
    <Button title="switch" onPress={()=>setMenu(!menu)}/>
 </NavigationContainer>
  );
}

