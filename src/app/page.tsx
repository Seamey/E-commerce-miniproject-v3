
import CardProduct from "@/components/cards/CardComponent";
import { CartProductType } from "@/lib/Definition";
import { Products } from "@/types/product";
import Link from "next/link";
import '@/app/globals.css';
import { Metadata } from "next";
import HeroSectionComponent from "@/components/layouts/header/HeroSection";
import React from "react";
import {Pagination} from "@nextui-org/react";
import { useAppDispatch } from "@/redux/hooks";
import { useGetProductByIdQuery } from "@/redux/service/product";
import { baseApi } from "@/lib/constants/BaseURL";
import counterSlice from "@/redux/features/counter/counterSlice";
import { addToCart } from "@/redux/features/carts/cartSlice";

export type ParamProps = {
  params: {
      id: number;
  };
};
async function fetchProducts(){
  const products = await fetch(`${baseApi}products?page=1&page_size=100 `,{
    cache: "no-store"
  });
  const rest = await products.json();
  return rest.results;

}
export const metadata: Metadata = {
  title: "Shinee",
  description: "Welcome to Shine Page.",
  keywords: ["products", "ecommerce", "sell"],
};



export default async function Home({ params }: ParamProps) {
 
  const products = await fetchProducts();
  const id = params.id;
  const dispatch = useAppDispatch();
    const { data: product, error, isLoading } = useGetProductByIdQuery(id);

    if (!product) return <div className='text-center'>No product found.</div>;

    const {name, image, price, desc, category} = product;

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, image, price, desc,category }));
    }
  return (
    <>
    <HeroSectionComponent/>
    <h1 className="text-center mt-10 text-2xl">OUR PRODUCTS</h1>
    
    <div className=" flex justify-center flex-wrap gap-5">

<div className=" w-11/12 gap-6 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

    {products.map((product: Products) => (
        <Link href={`/products/${product.id}`} key={product.id}>
            <CardProduct
                    id={id}
                    name={name}
                    price={price}
                    desc={desc}
                    image={image}
                    category={category}
                    onClick={handleAddToCart} />
        </Link>
    ))}

</div>
    <div className="flex flex-wrap gap-4 items-center">
     
    <Pagination 
     showShadow  
     total={10} 
    initialPage={1}  
    color="warning"/>
    
    </div>
</div>
    </>
  );
}
