"use client"

import React from 'react';
import { useGetProductByIdQuery } from '../../../../redux/service/product';
import { addToCart } from '../../../../redux/features/carts/cartSlice';
import{ useAppDispatch} from '../../../../redux/hooks';
import Loading from '@/app/loading';
import ProductDetailComponent from '@/components/cards/ProductDetail';
import { baseApi } from '@/lib/constants/BaseURL';


export type ParamProps = {
    params: {
        id: number;
    };
};

function Page({ params }: ParamProps) {
    const dispatch = useAppDispatch();
    const id = params.id;
    const { data: product, error, isLoading } = useGetProductByIdQuery(id);

    if (!product) return <div className='text-center'>No product found.</div>;

    const {name, image, price, desc, category} = product;

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, image, price, desc,category }));
    }


    if (isLoading) return <div><Loading /></div>;

    return (
        <main>
            <section className="my-10 grid place-content-center">
                <ProductDetailComponent
                    id={id}
                    name={name}
                    price={price}
                    desc={desc}
                    image={image}
                    category={category}
                    onClick={handleAddToCart} />
            </section>
        </main>
    );
}

export default Page;