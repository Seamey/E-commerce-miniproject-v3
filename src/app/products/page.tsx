"use client"
import LoadingComponent from "../loading";
import CardProduct from "@/components/cards/CardComponent";
import { Products } from "@/types/product";
import Link from "next/link";
import { Metadata } from "next";
import { baseApi } from "@/lib/constants/BaseURL";

async function fetchData() {
    const data = await fetch(`${baseApi}products/?page=1&page_size=100`);
    const response = await data.json();
    return response.results;
}

export const metadata: Metadata = {
  title: "Product",
  description: "This is Product page shop",
  keywords: ['shinee', 'ecommerce', 'sell',"shop"]
};

export default async function Home() {
    const products = await fetchData()


    return (
        <>
       
            <div className="mt-10 flex justify-center flex-wrap gap-5">

                <div className=" w-11/12 gap-6 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

                    {products.map((product: Products) => (
                            <CardProduct
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                image={product.image}
                                price={product.price}
                            />
                       
                    ))}
                </div>

            </div>
       
        </>
    );
}