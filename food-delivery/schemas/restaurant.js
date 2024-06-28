import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation : (rules)=>rules.required()
    }),
    defineField({
      name: 'description',
      title: 'Restaurant description',
      type: 'string',
      validation : (rules)=>rules.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Restaurant image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation : (rules)=>rules.required()
    }),
    defineField({
      name: 'rating',
      title: 'Restaurant Rating',
      type: 'number',
      validation : (rules)=>rules.required().min(1).max(5)
                  .error("please enter number between 1 and 5")
    }),
    defineField({
      name: 'type',
      title: 'Restaurant category',
      type: 'string',
      validation : (rules)=>rules.required(),
      type:"reference",
      to:[{type:"category"}]
    }),
    defineField({
      name: 'dishes',
      title: 'Restaurant dishes',
      type: 'array',
      of :[{type:"reference", to:[{type:"dish"}]}],
      
     
    }),
    
    
  
   
   
   
   
  ],

 
})
