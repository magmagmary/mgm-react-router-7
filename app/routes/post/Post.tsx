import React from 'react';
import type { Route } from '../+types/Post';
import { Form } from 'react-router';

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return { id, data };
};

export const clientAction = async ({ params }: Route.LoaderArgs) => {
    const { id } = params;

    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    });
};

const Post = ({ loaderData }: Route.ComponentProps) => {
    return (
        <div className='bg-slate-300 flex  justify-center h-svh w-svw'>
            <div className='mt-10 px-10'>
                <h1 className='text-3xl font-bold'>post Id: {loaderData.id}</h1>

                <div className='bg-white p-5 mt-5'>
                    <h2 className='text-xl font-bold'>{loaderData.data.title}</h2>
                    <p className='text-lg'>{loaderData.data.body}</p>
                </div>
                <Form method='delete'>
                    <button type='submit' className='bg-red-500 text-white p-2 mt-5'>Delete</button>
                </Form>
            </div>
        </div>
    )
}

export default Post