import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { getBasketItems,getBasketPrice } from '../features/basket'
import {useNavigation} from '@react-navigation/native'
const BasketIcon = () => {
    const items = useSelector(getBasketItems)
    const t_price = useSelector(getBasketPrice)
    const navigation = useNavigation()
  if(items.length == 0) return null
  return (
    <View className="absolute bottom-5 w-full z-50  ">
      <TouchableOpacity onPress={()=>navigation.navigate("Basket")} 
        className="mx-5 bg-[#f0c31f] p-4 rounded-lg flex-row items-center space-x-1">
          <Text className="bg-[#f1cf54] font-extrabold text-white text-lg py-1 px-2">{items.length}</Text>
          <Text className="flex-1 text-white text-lg text-center font-extrabold">View Basket</Text>
          <Text className="text-lg font-extrabold text-white">{t_price} $ </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon