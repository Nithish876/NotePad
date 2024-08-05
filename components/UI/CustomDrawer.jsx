import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useColorScheme } from 'nativewind'
import { Colors } from '../../constants/Colors'
const CustomDrawer = (props) => {
  const colorScheme = useColorScheme()
  return (
    <View style={{ flex: 1 }}>

      <DrawerContentScrollView style={{}} {...props}
        contentContainerStyle={{ backgroundColor: '#F5E7B2', paddingBottom:10 }}>
        <ImageBackground
          source={require("../../assets/images/NotePadLogo.png")}
          className={"w-24 h-28  mx-auto my-2"}
          resizeMode="contain"
        />
        <Text className={"text-center"}>NotePad</Text>
        <Text className="text-gray-500 text-center">Beta Version .0.1</Text>
      </DrawerContentScrollView>
      <DrawerItemList {...props} />
    </View>
  )
}

export default CustomDrawer