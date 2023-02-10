import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetVideosByCategoryQuery } from '../features/slices/youtubeV3Slice'
import { Error, Loader, Videorow } from '../components';

const Search = () => {
    const {genre} = useParams();
    console.log(genre)
    const {data, isFetching, error} = useGetVideosByCategoryQuery(genre);

    if(isFetching) return <Loader title={genre}/>
    if(error) return <Error />

    return (
        <section className='section_margin min-h-[92.3vh] dark:bg-mainBlack w-full'>
            <div className='w-full md:px-32 px-12 py-12'>
                <h2 className='font-roboto font-medium mb-6 p-1 dark:text-notWhite border-b-[1px] dark:border-[#444]'>Results</h2>
                {data?.data?.map((data, index) => (
                    <Videorow key={index} data={data}/>
                ))}
            </div>
        </section>
    )
}

export default Search