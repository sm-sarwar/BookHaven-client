import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBooksCard from '../components/AllBooksCard';

const AllBooks = () => {
    const allBooks = useLoaderData()
    return (
        <div className='bg-base-200 p-10 my-10 rounded-lg'>
            <h1 className='text-2xl font-bold text-teal-600 text-center my-5'>All Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 md:px-0'>
                {
                    allBooks.map((book)=><AllBooksCard key={book._id} book={book} ></AllBooksCard> )
                }
            </div>
        </div>
    );
};

export default AllBooks;