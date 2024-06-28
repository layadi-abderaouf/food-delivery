import { View,Image, Text,TouchableOpacity,ScrollView } from 'react-native'
import React,{useLayoutEffect,useEffect} from 'react'
import { useRoute,useNavigation } from '@react-navigation/core'
import { urlFor } from '../sanity'
import { useDispatch } from 'react-redux'
import { ArrowLeftIcon,StarIcon,MapPinIcon,ChevronRightIcon,QuestionMarkCircleIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { setRetaurant } from '../features/restaurant'


const Restaurant = () => {
    const navigation = useNavigation() 
    const dispatch = useDispatch()
    const {params : {
        id,img,long,title,rating,genre,address,dishes,lat,des
    }} = useRoute()

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown : false
        })
    },[])

    useEffect(() => {
      dispatch(setRetaurant({
        id,img,long,title,rating,genre,address,dishes,lat,des
      }))
    }, [dispatch])
    
    
  

  return (
    <>
    <BasketIcon/>
    <ScrollView >
       
      <View className="relative">
          <Image 
            source={{uri : urlFor(img).url()}}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
           onPress={()=>{navigation.goBack(5)}}
           className="absolute top-14 left-5 bg-gray-200 rounded-full">
            <ArrowLeftIcon size={30} color="#f0c31f" />
          </TouchableOpacity>
      </View>
      <View className="bg-white">
          <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title} </Text>
              <View className="flex-row my-1 space-x-2">
                  <View className="flex-row items-center space-x-2">
                     <StarIcon color="#f0c31f" opacity={0.6} size={22} />
                     <Text className="text-s text-gray-500">
                       <Text style={{color : "#f0c31f"}} >{rating}</Text>  . {genre}
                     </Text>
                  </View>
                  <View className="flex-row items-center space-x-2">
                     <MapPinIcon color="#f0c31f" opacity={0.5} size={22} />
                     <Text className="text-s text-gray-500">
                       <Text  >{address}</Text>  
                     </Text>
                  </View>
              </View>
              <Text className="mt-2 pb-10 text-gray-500 border-b border-gray-400 "> {des} </Text>
          </View>
          {/*
                 <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300 p-4">
            <QuestionMarkCircleIcon size={20} color="#f0c31f" />
            <Text className="pl-2 flex-1 text-md font-bold" >Have a food allergy ?</Text>
            <ChevronRightIcon size={20} color="#f0c31f" />
          </TouchableOpacity>
           */}

         
      </View>
      <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl text-center">
              Menu
          </Text>
          {/*dishes */}
          {dishes.map((d)=>(
            <DishRow key={d._id} id={d._id} image={d.image} name={d.name} description={d.description} price={d.price} />
             
          ))}
          
          
      </View>
    </ScrollView>
    
    </>
  )
}

export default Restaurant