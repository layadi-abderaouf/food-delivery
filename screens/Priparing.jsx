import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as loading from 'react-native-progress'
import {useNavigation} from '@react-navigation/native'

const Priparing = () => {
  const navigation = useNavigation()

  useEffect(() => {
     setTimeout(()=>{
       navigation.navigate("Delivery")
     },3000)
  }, [])
  
  return (
    <SafeAreaView className="bg-[#f0c31f] justify-center items-center  flex-1">
      <Text className="text-3xl text-white pb-5 font-bold">Priparing</Text>
      <loading.Circle size={60} indeterminate={true} color="white" />

    </SafeAreaView>
  )
}

export default Priparing