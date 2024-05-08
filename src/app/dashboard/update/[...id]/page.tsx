import { baseApi } from '@/lib/constants/BaseURL'
import UpdateProductForm from '@/components/form/FormUpdate'
import React from 'react'
import { Products } from '@/types/product'
import { useCreateProductMutation,
  useUpdateProductMutation,
useDeleteProductMutation,
useGetProductByIdQuery,
useGetProductBySellerQuery,
useGetProductsQuery } from '@/redux/service/product'

type Props = {
  params:{
    id:number
  },
  
}
// const getData=async(props:Products)=>
// {
//   const data=await fetch(`${baseApi}products/${props.id}/`)
//   const respone= await data.json()
//   console.log(respone)
//   return respone.results;
// }
export default async function page({params}:Props) {
  // const data= await getData(props.id)
  const id = params.id
  const getById = useGetProductByIdQuery(id)
  console.log(getById)
  
  return (
  <>
      {/* <UpdateProductForm 
        category={getById.category.name}
        price={getById.price}
        desc={data.desc}
        name={data.name}
        quantity={data.quantity}
        image={data.image}
        id={data.id}
        seller={data.seller}
      /> */}
  </>
  )
}