import { baseApi } from '@/lib/constants/BaseURL'
import UpdateProductForm from '@/components/form/FormUpdate'
import React from 'react'
import { Products } from '@/types/product'

type Props = {
  params:{
    id:number
  },
  
}
const getData=async(props:Products)=>
{
  const data=await fetch(`${baseApi}products/${props.id}/`)
  const respone= await data.json()
  console.log(respone)
  return respone.results;
}
export default async function page(props:any) {
  const data= await getData(props.id)
  console.log(data)
  return (
  <>
      <UpdateProductForm 
        category={data.category.name}
        price={data.price}
        desc={data.desc}
        name={data.name}
        quantity={data.quantity}
        image={data.image}
        id={data.id}
        seller={data.seller}
      />
  </>
  )
}