import React from 'react';
import type { Route } from './+types/ProductInfo';
import { products } from './Products';

export const loader = async ({ params }: Route.LoaderArgs) => {
    const { id } = params;

    return { id };
}

const ProductInfo = ({ loaderData }: Route.ComponentProps) => {
    const product = products.find(product => product.id === +loaderData.id);

    if (!product) {
        return <div className='bg-red-500 text-white p-5'>Product not found</div>
    }

    return (
        <div className='pt-5 border-t border-slate-600'>
            <div key={product.id} className='bg-slate-400 p-5 m-5 text-center cursor-pointer'>
                <h2 className='text-xl font-bold'>{product.name}</h2>
                <p className='text-lg'>${product.price}</p>
            </div>
        </div>
    )
}

export default ProductInfo