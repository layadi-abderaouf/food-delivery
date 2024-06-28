import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { getRestaurant } from '../features/restaurant'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import * as loading from 'react-native-progress'
import MapView,{Marker} from 'react-native-maps'

const Delivery = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(getRestaurant)
  return (
    <View className="bg-[#f0c31f] flex-1">
      <SafeAreaView className="z-50">
          <View className="flex-row  items-center p-5">
              <TouchableOpacity className="flex-1" onPress={()=>navigation.navigate("Home")} >
                  <XMarkIcon color="white" size={30} />
              </TouchableOpacity>
              <Text className="text-white text-lg font-light">Order Help</Text>
          </View>
          <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-sm">
              <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                    <Text className="font-bold text-4xl">45-55 Minutes</Text>
                </View>
                <Image
                source={{uri : "https://links.papareact.com/fls"}}
                className="h-20 w-20"/>
              </View>
              <loading.Bar size={30} color="#f0c31f" indeterminate={true} />
              <Text className="mt-3 text-gray-500">
                  your order at {restaurant.title} is being prepared
              </Text>
              
          </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
            latitude : restaurant.lat ,
            longitude :  restaurant.long,
            latitudeDelta : 0.05,
            longitudeDelta : 0.05
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude : restaurant.lat ,
            longitude :  restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.description}
          identifier="origin"
          pinColor="#f0c31f"
        />
      </MapView>
      <SafeAreaView className="flex-row bg-white items-center pb-3 space-x-5 h-26">
          <Image
            source={{ uri : "https://links.papareact.com/wru"}}
            className="h-12 w-12 bg-gray-300 rounded-full ml-5"
          />
          <View className="flex-1">
              <Text className="text-lg">Mohammed</Text>
              <Text className="text-gray-400">Your rider</Text>
          </View>
          <Text className=" text-[#f0c31f] mr-5 text-lg ">Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default Delivery