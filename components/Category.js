import { ScrollView, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
//components
import CategoryCard from './CategoryCard'


import client,{urlFor} from '../sanity'

const Category = () => {

  //state
  const [categories, setcategories] = useState([])
  //functions
  async function getcategory() {
    const data = await client.fetch('*[_type == "category"]')
    setcategories(data)
  }

  useEffect(() => {
    getcategory()
    
  }, [])

  return (
    <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop : 10,
        paddingHorizontal:15
      }}
    >
      {categories.map((c)=>(
        <CategoryCard key={c._id} id={c._id} title={c.name} img={urlFor(c.image).width(200).url()} />
      ))}
      
    
    </ScrollView>
  )
}

export default Category