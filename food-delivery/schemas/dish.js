import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation : (rules)=>rules.required(),
    }),
   
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
     
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation : (rules)=>rules.max(200),
     
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
     
    }),
  ],
  
})
