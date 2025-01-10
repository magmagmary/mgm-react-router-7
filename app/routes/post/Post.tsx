import React from 'react';
import type { Route } from '../+types/Post';

export const loader = async ({ params }: Route.LoaderArgs) => {
    const { id } = params;

    return { id };
};

export const action = async () => { };

const Post = ({ loaderData }: Route.ComponentProps) => {
    return (
        <div className='bg-slate-300 flex items-center justify-center h-svh w-svw'>
            <h1 className='text-3xl font-bold'>post Id: {loaderData.id}</h1>
        </div>
    )
}

export default Post