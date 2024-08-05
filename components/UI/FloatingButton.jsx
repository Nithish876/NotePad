import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const FloatingButton = (props) => {
  return (
    <TouchableOpacity className={`${props.styles} rounded-full bg-blue-500 flex justify-center items-center  w-14 h-14 `}>
      <Ionicons name="add" size={22} color={"white"}/>
    </TouchableOpacity>
  )
}

export default FloatingButton