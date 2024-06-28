import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'category featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation : (rules)=>rules.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation : (rules)=>rules.max(200),
     
    }),
    defineField({
        name: 'restaurants',
        title: 'Restaurant ',
        type: 'array',
        of :[{type:"reference", to:[{type:"restaurant"}]}],
      }),
  ],
  
})
