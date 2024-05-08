
"use client"
import React from 'react'
import HeroSectionComponent from '@/components/layouts/header/HeroSection'
import CardProduct from '@/components/cards/CardComponent'
import { useGetProductsQuery } from '@/redux/service/product'
import { useState } from 'react'
import { ProductType } from '@/lib/Definition'
import { Pagination } from '@nextui-org/react'

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery({
    page: currentPage,
    pageSize: 10,
  });
  const products = data?.results ;
  return (
    <main>
      <HeroSectionComponent />
      <h1 className="text-center mt-10 text-2xl">OUR PRODUCTS</h1>

      <div className=" flex justify-center flex-wrap gap-5">
        <div className=" w-11/12 gap-6 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products?.map((product: ProductType) => (
                                <CardProduct
                                    key={product.id}
                                    id={product.id}
                                    name={product.name} 
                                    price={product.price}
                                    image={product.image}
                                    category={product.category}
                                    desc={product.desc}
                                />
        ))}
            
        </div>
      </div>
      
    <div className="flex flex-wrap gap-4 items-center justify-center m-4">

     <Pagination
             total={10}
             color={"warning"}
             page={currentPage}
             onChange={setCurrentPage}
           />
     </div>
    </main>
      )
}

      export default page

