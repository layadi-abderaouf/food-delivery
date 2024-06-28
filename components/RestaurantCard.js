import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {StarIcon} from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/core'

const RestaurantCard = ({
    id,img,long,title,rating,genre,address,dishes,lat,des
}) => {
  const navigation = useNavigation()
 
  return (
    
    <TouchableOpacity
     onPress={()=>{
        navigation.navigate("Restaurant",{
          id,img,long,title,rating,genre,address,dishes,lat,des
        })
     }}
     className="bg-white mr-3 shadow">
      <Image source={{uri : urlFor(img).url()}} className="rounded-sm h-36 w-64" />
      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="#f0c31f" opacity={0.5} size={22} />
            <Text className="text-s text-gray-500">
               <Text style={{color : "#f0c31f"}} >{rating}</Text>  . {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="#f0c31f" opacity={0.4} size={22} />
            <Text className="text-s text-gray-500">
                  NearBy . {address}
            </Text>
        </View>
      </View>
      
     
    </TouchableOpacity>
  )
}

export default RestaurantCard