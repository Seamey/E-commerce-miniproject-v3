// // "use client"
// import { useSession, signIn, signOut } from "next-auth/react"
// import Image from "next/image";
// import HeroSectionComponent from "@/components/layouts/header/HeroSection";
// import { SignUpComponent } from "@/components/form/SignupForm";

// export default function Home() {
//  // extracting data from usesession as session
// //  const { data: session } = useSession()
// //  // checking if sessions exists
// //  if (session) {
// //    // rendering components for logged in users
// //    return (

// //      <div className="w-full h-screen flex flex-col justify-center items-center">
// //        <div className="w-44 h-44 relative mb-4">
// //        <Image src={session.user?.image as string} fill alt="" className="object-cover rounded-full"/></div>
// //        <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
// //        <p className="font-bold mb-4">{session.user?.email}</p>
// //        <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button></div>) }
//  return (
  
//    <div className="w-full h-screen flex flex-col justify-center items-center"><p className="text-2xl mb-2">Not Signed In</p></div>
// )}
    
       
//        {/* <button className="bg-blue-600 py-2 px-6 rounded-md text-white mb-2" onClick={() => signIn('google')}>Sign in with google</button>
//        <button className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" onClick={() => signIn('github')}>Sign in with github</button>
//    </div>)} */}


// "usr client"
// import React from 'react'
// import { SignUpComponent } from '@/components/form/SignupForm'
// import HeroSectionComponent from '@/components/layouts/header/HeroSection'
// import CardComponent from '@/components/cards/CardComponent'

// const page = () => {
//   return (
//     <>
//       <HeroSectionComponent/>

//       {/* <CardComponent 
//       title={'Hello Babay'}
//       image={'https://www.pinterest.com/pin/34128909668701114/'}
//       price={0}
//        id={0}/> */}
      
//     </>
//   )
// }

// export default page

import CardProduct from "@/components/cards/CardComponent";
import { CartProductType } from "@/lib/Definition";
import { Products } from "@/types/product";
import Link from "next/link";
import '@/app/globals.css';
import { Metadata } from "next";
import HeroSectionComponent from "@/components/layouts/header/HeroSection";
import React from "react";
import {Pagination} from "@nextui-org/react";
import { warning } from "framer-motion";
// import { useState } from "react";
import { baseApi } from "@/lib/constants/BaseURL";
import counterSlice from "../../redux/features/counter/counterSlice";


async function fetchProducts(){
  const products = await fetch(`${baseApi}products?page=1&page_size=100 `,{
    cache: "no-store"
  });
  const rest = await products.json();
  // const filteredProducts = rest.results.filter((product: ProductType) => product.seller === sellerName);
  // return filteredProducts;
  return rest.results;

}
export const metadata: Metadata = {
  title: "Shinee",
  description: "Welcome to Shine Page.",
  keywords: ["products", "ecommerce", "sell"],
};



export default async function Home() {
 
  const products = await fetchProducts();
  return (
    <>
    <HeroSectionComponent/>
    <h1 className="text-center mt-10 text-2xl">OUR PRODUCTS</h1>
    
    <div className=" flex justify-center flex-wrap gap-5">

<div className=" w-11/12 gap-6 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

    {products.map((product: Products) => (
        <Link href={`/products/${product.id}`} key={product.id}>
            <CardProduct

                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                price={product.price}
            />
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
