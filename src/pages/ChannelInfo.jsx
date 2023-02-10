import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetChannelDetailsQuery } from '../features/slices/youtubeV3Slice';
import {IoIosSearch} from 'react-icons/io';
import { ChannelVideos, Error, Loader  } from '../components';

const ChannelInfo = () => {
    const myUl = [
    "Videos",
    "Playlists",
    "Community",
    "Live",
    "Shorts",
    "Channels",
    "About",
    <IoIosSearch className='text-lg'/>
]

    const navigate = useNavigate();
    const {id} = useParams();
    const {data, isFetching, error} = useGetChannelDetailsQuery(id);
    console.log("my chaneeeeeel", data);

    if(isFetching) return <Loader title="Channel Details"/>
    if(error) return <Error />

    return (
        
        <div className='text-black section_margin dark:bg-mainBlack h-full smooth_transition'>
            <img src={data?.meta.image?.banner[4].url} alt="img" className='w-full h-[246px] object-cover'/>
            <div className='md:px-[80px] sm:px-[60px] px-[30px] py-5'>
                <div className='flex_row_view justify-between mb-6'>
                    <div className='row_view'>
                        <img src={data?.meta?.thumbnail[1]?.url} alt="channel"  className='rounded-full object-cover sm:block mr-5'/>
                        <div className='flex_col_view justify-start'>
                            <h2 className='font-roboto text-xl font-medium mb-1 dark:text-white'>{data?.meta?.title}</h2>
                            <p className='font-roboto text-sm text-darkerGray dark_text'>@{data?.meta?.title}</p>
                            <span className='font-roboto text-sm text-darkerGray dark_text'>{data?.meta?.subscriberCount} subscribers</span>
                        </div>
                    </div>
                    <button className='font-roboto font-medium text-sm px-4 py-[9px] bg-black text-white rounded-[20px] dark:bg-white dark:text-[#333] smooth_transition dark:hover:bg-darkGray'>Subscribe</button>
                </div>
            
                <div className='w-full border-b-[1px] border-darkGray dark:border-[#333] mb-6 overflow-hidden'>
                    <ul className='flex_row_view justify-between list-none sm:w-2/4 w-5/6 '>
                        <li className='font-roboto font-medium text-black cursor-pointer border-b-2 border-darkerGray px-7 py-3 h-full dark:text-white dark:border-darkerGray'>Home</li>
                        {myUl.map((li, i) => (
                            <li className='font-roboto font-medium px-7 py-3 text-darkerGray cursor-pointer dark:text-light' key={i}>{li}</li>
                        ))}
                    </ul>
                </div>

                <div onClick={() => navigate(`/watch/${data?.data[0].videoId}`)} className='flex flex-row items-start justify-start w-full overflow-hidden cursor-pointer py-5 border-b-[1px] border-darkGray dark:border-[#333] mb-5'>
                    <img src={data?.data[0]?.thumbnail[2]?.url} alt="vid" className='rounded-lg mr-5'/>
                    <div className='flex_col_view justify-start w-full'>
                        <h2 className='w-full truncate text-xl dark:text-white'>{data?.data[0]?.title}</h2>
                        <span className='mb-1 text-darkerGray dark:text-light '>{data?.meta?.title}</span>
                        <div className='row_view mb-3 text-darkerGray'>
                            <span className='font-roboto text-sm text-darkerGray mr-2 text-[13px] dark:text-light'>{parseInt(data?.data[0]?.viewCount).toLocaleString()} views</span>
                            <span className='font-roboto text-sm text-darkerGray text-[13px] dark:text-light'>{data?.data[0]?.publishedText}</span>
                        </div>
                        <p className='w-2/4 truncate text-darkerGray text-xs dark:text-light'>{data?.data[0]?.title}</p>
                    </div>
                </div>

                <div className='flex_col_view justify-start'>
                    <h2 className='font-roboto text-md font-medium mb-4 dark:text-white'>{data?.meta?.title}: Official Videos</h2>
                    <div className='w-full flex_row_view justify-start flex-wrap gap-[8px]'>
                        {data?.data?.map((video, i) => (
                            <ChannelVideos video={video} key={i}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelInfo