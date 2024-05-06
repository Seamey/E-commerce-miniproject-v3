import React from "react";
import Image from "next/image";
import { CartProductType } from "@/lib/Definition";
import { useAppDispatch } from "../../../redux/hooks";
import { increment } from "../../../redux/features/counter/counterSlice";
import { addToCart } from "../../../redux/features/carts/cartSlice";

const ProductDetailComponent = ({
  id,
  name,
  image,
  desc,
  price,
  category
}: CartProductType) => {

        const dispatch = useAppDispatch();
        const handleAddToCart = () => {
            dispatch(increment());
            dispatch(addToCart({id, name, image,desc, price,category}));
        }
  return (
    <main className='w-11/12 mt-10 md:w-8/12 mx-auto flex items-center gap-12'>
       <div>
         <Image
           width={500}
           height={300}
           src={image}
           alt={name}
           className='rounded-xl '
         />
       </div>
      <div className='flex flex-col justify-center '>
         <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>{name}</h1>
         <p className='text-base md:text-lg lg:text-xl mb-6'>{desc}</p>
         <div className='flex items-center mb-6'>
           <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-red-600 dark:text-white mr-4'>
             ${price}
           </p>
           <button onClick={handleAddToCart} className='px-12 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-400 focus:outline-none focus:ring-2 text-sm '>
             Add ToCart
           </button>
         </div>
       </div>
    </main>
  );
};

export default ProductDetailComponent;