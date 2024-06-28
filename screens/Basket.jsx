import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import React, { useMemo,useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurant } from '../features/restaurant'
import { getBasketItems, getBasketPrice, removeFromBasket } from '../features/basket'
import { SafeAreaView } from 'react-native-safe-area-context'
import { urlFor } from '../sanity'

const Basket = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const restaurant = useSelector(getRestaurant)
    const t_price = useSelector(getBasketPrice)
    const items = useSelector(getBasketItems)
    const [groupItems, setgroupItems] = useState([])
    
    useMemo(() => {
       const groupitems = items.reduce((resault,item)=>{
         (resault[item.id] = resault[item.id] || []).push(item);
         return resault
       },{})
       setgroupItems(groupitems)
    }, [items])
    console.log(groupItems);
  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 bg-gray-100">
        <View className="flex-row space-x-4 items-center px-4 py-3 bg-white my-5">
            <Image className="w-10 h-10 p-4 bg-gray-400 rounded-full" source={{uri : "https://t3.ftcdn.net/jpg/04/14/78/90/360_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg"}}/>

            <Text className="flex-1">deliver on 45 min</Text>
             <TouchableOpacity>
               <Text className="text-[#f0c31f]">change</Text>
             </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupItems).map(([key,item])=>(
             <View key={key} className="flex-row bg-white py-2 px-5 p-4 items-center space-x-3">
                <Text className="text-[#f0c31f] text-md">{item.length} x </Text>
                <Image
                  source={{uri : urlFor(item[0]?.image).url()}}
                  className="h-12 w-12 rounded-full"
                  />
                <Text className="  flex-1">{item[0]?.name}  </Text>
                <Text className="text-gray-600  ">$ {item[0]?.price}  </Text>
                <TouchableOpacity onPress={()=>dispatch(removeFromBasket({id : key}))} >
                  <Text className="text-[#f0c31f] text-xs">
                    Remove
                  </Text>
                </TouchableOpacity>

             </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">$ {t_price}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$ 5.99</Text>
          </View>
          <View className="flex-row justify-between">
            <Text >Order Total</Text>
            <Text className="text-extrabold">$ {t_price + 5.99}</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Priparing")} className="rounded-lg bg-[#f0c31f] p-4">
            <Text className="text-white text-lg font-bold text-center">Place Order</Text>
          </TouchableOpacity>
        </View>
       
      </View>
     
    </SafeAreaView>
  )
}

export default Basket