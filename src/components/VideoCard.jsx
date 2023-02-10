import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPlayedVideos } from '../features/slices/statesSlice';

const VideoCard = ({video}) => {
    const dispatch = useDispatch();
    const HandlePlayedVideos = () => {
        dispatch(getPlayedVideos(video));
    }
    return (
        <div className='flex flex-col justify-start  w-[337px] h-[300px] mb-[40px] rounded-lg'>
            <Link onClick={HandlePlayedVideos} to={`/watch/${video.videoId}`}>
                <img src={video?.thumbnail[0]?.url} alt="video" className='rounded-lg cursor-pointer w-full h-[187px]'/>
                <div className='flex flex-row items-start justify-start mt-2'>
                    <img src={video?.channelThumbnail[0]?.url} alt="channel"  className='rounded-full w-[36px] mr-2'/>
                    <div className='flex flex-col'>
                        <h3 className='font-roboto max-h-[45px] overflow-hidden pr-3 mb-2 overflow-x-hidden cursor-pointer dark:text-white'>{video?.title}</h3>
                        <h6 className='font-roboto text-[14px] font-[400] text-darkerGray'>{video.channelTitle}</h6>
                        <p className='font-roboto text-[14px] font-[400] text-darkerGray'>{parseInt(video?.viewCount).toLocaleString()} views <sup className='text-lg font-bold'>.</sup> {video?.publishedText}</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default VideoCard