import { View, Text ,Image,TextInput,ScrollView} from 'react-native'
import React, { useLayoutEffect,useEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ChevronRightIcon,
  ChevronDownIcon,
  UserIcon
  ,AdjustmentsVerticalIcon} from 'react-native-heroicons/outline'
import client from '../sanity'

//components
import Category from '../components/Category'
import FeaturedRow from '../components/FeaturedRow'




const Home = () => {

  const navigation = useNavigation() 
 
  //state
  const [featured, setfeatured] = useState([])

  //functions
  async function getfeatured() {
    const featured = await client.fetch('*[_type == "featured"]')
    setfeatured(featured)
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown : false
    })
  },[])

  useEffect(() => {
    
    getfeatured()
  }, [])
  
  console.log(featured)
  return (
    <SafeAreaView className="bg-white pt-4">
      <Text className="text-red-500 "></Text>
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri:"https://t3.ftcdn.net/jpg/04/14/78/90/360_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg"
          }}
          className="h-11 w-11 p-4 rounded-full bg-gray-300"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Currant location
            <ChevronDownIcon size={20} color="#f0c31f" />
          </Text>
        </View>
        <UserIcon size={35} color="#f0c31f" />
      </View>
      {/* search */}
      <View className="flex-row space-x-2 items-center pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1  p-3 bg-gray-200">
       
           <ChevronRightIcon color="#f0c31f" size={20} />
           <TextInput placeholder="Restaurants and cuisines"
                      keyboardType="default"   
            />
        </View>
        <AdjustmentsVerticalIcon color="#f0c31f"/>
      </View>
      {/* content */}
      <ScrollView className="bg-gray-100" 
      contentContainerStyle={{
        paddingBottom:100
      }}>
        {/*categories */}
        <Category/>

        {/*featured */}
        {featured?.map((f)=>(
          <FeaturedRow id={f._id} key={f._id} title={f.name} des={f.description} fcategory="fffff" />
        ))}
        

      </ScrollView>
      
      
    </SafeAreaView>
  )
}

export default Home