import { View, Text,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
//components
import RestaurantCard from './RestaurantCard'

import client from '../sanity'

const FeaturedRow = ({title,des,id}) => {

  //state
  const [restaurants, setrestaurants] = useState([])

  //functions
  //functions
  async function getrestaurants() {
    const data = await client.fetch('*[_type == "featured" && _id == "' + id+'"]{...,restaurants[]->{...,dishes[]->{...},type->{...}}}[0]')
    setrestaurants(data.restaurants)
    
  }


  useEffect(() => {
    
    getrestaurants()
  }, [id])
  restaurants.map((r)=>{
    
  })
  
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#f0c31f" />
      </View>
      <Text className="text-xs text-gray-500 px-4" >{des}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal : 15}}
        className="pt-4"
      >
       {/* restaurant cards */}
       {restaurants.map((r)=>(
          
           <RestaurantCard key={r._id} id={r._id}  img={r.image}
           long={r.long} title={r.name} rating={r.rating}
           genre={r.type?.name} address={r.address} dishes={r.dishes}
           lat={r.lat} des={r.description} />
       ))}
      
       
      </ScrollView>
      
    </View>
  )
}

export default FeaturedRow