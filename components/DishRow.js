import { View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { urlFor } from '../sanity'
import {MinusCircleIcon,PlusCircleIcon} from 'react-native-heroicons/solid'
import { useDispatch,useSelector } from 'react-redux'
import { addToBasket, removeFromBasket,getBasketItemsById } from '../features/basket'


const DishRow = ({id,name,image,description,price}) => {
  const dispatch = useDispatch()
  //state
  const [isPressed, setisPressed] = useState(false)
  const items = useSelector((state)=>getBasketItemsById(state,id))

  const addItemToBasket = ()=>{
    dispatch(addToBasket({id,name,image,description,price}))
  }
  const removeItemFromBasket = ()=>{
    dispatch(removeFromBasket({id}))
  }
  
  //body
  return (
    <>
    <TouchableOpacity onPress={()=>{setisPressed(!isPressed)}} 
    className='border p-4 bg-white border-gray-200 border-b-0 '   >
      <View className="flex-row">
        <View className="flex-1 pr-2">
           <Text className="mb-1 text-lg" >{name} </Text>
           <Text className="text-gray-400" >{description} </Text>
           <Text className="mt-2 text-gray-400">{price} $ </Text>
        </View>
        
        <View>
          <Image source={{uri : urlFor(image).url()}}
                 style={{borderWidth : 1 , borderColor : "#f3f3f4"}}
                  className="h-20 w-20 bg-gray-300 p-4" />
        </View>
      </View>
      
      
    </TouchableOpacity>
    {isPressed && (
      <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3 p-4">
          <TouchableOpacity onPress={removeItemFromBasket} className="pr-5">
            <MinusCircleIcon color={items.length > 0 ? "#f0c31f" : "gray"} size={40} />
          </TouchableOpacity>

          <Text>{items.length} </Text>

          <TouchableOpacity onPress={addItemToBasket} className="pl-5">
            <PlusCircleIcon color="#f0c31f" size={40} />
          </TouchableOpacity>
        </View>
        
      </View>
    )}
    </>
  )
}

export default DishRow