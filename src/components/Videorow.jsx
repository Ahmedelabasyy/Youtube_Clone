import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPlayedVideos } from '../features/slices/statesSlice';

const Videorow = ({data}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("histoooooooooooooooooory",data);
    const handlePlayedVideos = (data) => {
        dispatch(getPlayedVideos(data));
        console.log("PLayeeddddddddddddddddddddd");
        navigate(`/watch/${data?.videoId}`);
    }
    return (
        <div onClick={() => handlePlayedVideos(data)} className='w-full flex sm:flex-row  flex-col items-start  justify-start mb-3 cursor-pointer max-w-[100%] overflow-hidden'>
                <img src={data?.thumbnail[0]?.url} alt="video" className='rounded-lg md:mr-3 object-cover max-w-full md:w-[250px] w-full mb-2'/>
            <div className='flex_col_view justify-start'>
                <h3 className='overflow-hidden truncate sm:w-[530px] w-full font-roboto sm:text-sm text-xs font-[500] mb-2 dark:text-white'>{data?.title}</h3>
                <span className='font-roboto font-[500] text-[12px] mb-1 text-darkerGray'>{data?.channelTitle}</span>
                <p className='font-roboto font-[500] text-[12px] text-darkerGray'>{parseInt(data?.viewCount).toLocaleString()} views <sup>.</sup> {data?.publishedTimeText}</p>
            </div>
        </div>
    )
}

export default Videorow