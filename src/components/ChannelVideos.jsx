import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChannelVideos = ({video}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/watch/${video.videoId}`)} className=' xl:w-[19%] lg:w-[24%] md:w-[32%] sm:w-[32%] xs:w-[49%] w-full flex_col_view justify-start overflow-hidden mb-7 cursor-pointer'>
            <img src={video?.thumbnail[3]?.url} alt="video" className='w-full mb-1 rounded-lg'/>
            <h2 className='font-roboto text-sm font-medium h-[43px] mb-1 overflow-hidden dark:text-white'>{video?.title}</h2>
            <span className='text-darkerGray text-xs font-roboto font-medium dark:text-light'>{parseInt(video?.viewCount).toLocaleString()} views</span>
            <span className='text-darkerGray text-xs font-roboto font-medium dark:text-light'>{video?.publishedText}</span>
        </div>
    )
}

export default ChannelVideos