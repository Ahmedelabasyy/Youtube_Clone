import React from 'react'
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { Comment, Error, Loader, Relatedvideos } from '../components';
import { useGetChannelDetailsQuery, useGetRelatedVideosQuery, useGetVideoCommentsQuery, useGetVideoDetailsQuery } from '../features/slices/youtubeV3Slice';
import {HiHandThumbDown, HiHandThumbUp, HiOutlineHandThumbDown, HiOutlineHandThumbUp} from 'react-icons/hi2';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import {RiShareForwardLine} from 'react-icons/ri';
import {TfiDownload} from 'react-icons/tfi';
import { useState } from 'react';


const Videodetails = () => {
    const {id} = useParams();
    const [liked, setLiked] = useState(false);
    const [unLiked, setUnLiked] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const {data, isFetching, error} = useGetVideoDetailsQuery(id);
    const {data: res, isFetching: fetching, error: gotError} = useGetChannelDetailsQuery(data?.channelId);
    const {data: comments, isFetching: isfetching, error: isError} = useGetVideoCommentsQuery(id);

    
    console.log("Video details isssss", data);
    console.log("Commentsssss", comments);

    if(isFetching || isfetching || fetching) return <Loader title="Video"/>
    if(error || gotError || isError) return <Error />

    const handleLike = () => {
        setLiked(prev => !prev);
        console.log(liked);
        setUnLiked(false)
    }

    const handleUnLike = () => {
        setUnLiked(prev => !prev);
        console.log(unLiked);
        setLiked(false)

    }

    const handleShowMore = () => {
        setShowMore(true);
    }

    const handleShowLess = () => {
        setShowMore(false);
    }

    return (
    <div className='px-6 py-6 lg:px-16 xl:px-20 smooth_transition dark:bg-mainBlack w-full flex flex-col sm:flex sm:flex-row items-start justify-between'>
        <div className='flex flex_col_view justify-center sm:w-[68%] w-full mb-5'>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="sm:!w-full !max-w-[100%] md:!h-[72vh] h-[50vh]" controls/>
            <div className='w-full'>
                <h2 className='font-roboto font-medium md:text-lg my-3 dark:text-white'>{data?.title}</h2>
                <div className='flex lg:flex-row sm:justify-between flex_col_view justify-center w-full mb-4'>
                    <div className='row_view mb-5 sm:mb-0'>
                        <Link to={`/channel/${data?.channelId}`}>
                            <img src={res?.meta?.thumbnail[0]?.url} className="rounded-full w-[40px] h-[40px]" alt="artist" />
                        </Link>
                        <div className='flex flex-col items-start justify-center ml-3 mr-7'>
                            <h3 className='font-roboto text-[14px] font-semibold dark:text-white'>{data?.channelTitle}</h3>
                            <span className='font-roboto text-[12px] text-darkerGray'>{res?.meta?.subscriberCount} subscribers</span>
                        </div>
                        <button className='font-roboto font-medium md:text-sm text-[12px] md:px-5 md:py-2 px-4 py-[6px] bg-black text-white rounded-[20px] dark:bg-white dark:text-[#333] dark:hover:bg-darkGray'>Subscribe</button>
                    </div>
                    <div className='flex_row_view justify-between sm:w-[510px] w-full'>
                        <div className='row_view md:rounded-[20px] overflow-hidden'>
                            <button onClick={() => handleLike()} className='md:flex-row  flex flex-col items-center md:px-5 py-2 md:bg-myGray md:h-[36px] h-[60px] md:icon_hover md:border-r-[2px] dark:text-white font-roboto md:font-medium text-sm
                            md:dark:bg-[#333] md:dark:hover:bg-[#3e3e3e] md:dark:border-[#444]

                            '>{liked ? <HiHandThumbUp className='text-xl md:mr-1'/> : <HiOutlineHandThumbUp className='text-xl md:mr-1' />}Like</button>

                            <button onClick={() => handleUnLike()} className='md:flex-row  flex flex-col items-center md:px-5 pl-5 py-2 md:bg-myGray md:h-[36px] md:icon_hover dark:text-white h-[60px] font-roboto md:font-medium text-sm
                            md:dark:bg-[#333] md:dark:hover:bg-[#3e3e3e] md:dark:border-[#444]

                            '>{unLiked ? <HiHandThumbDown className='text-xl md:mr-1'/> : <HiOutlineHandThumbDown className='text-xl md:mr-1'/>}Dislike</button>
                        </div>

                        <button className='md:bg-myGray flex flex-col items-center md:flex-row  md:icon_hover 
                        md:px-5 py-2 md:h-[36px] h-[60px] rounded-[20px] dark:text-white
                        md:dark:bg-[#333] md:dark:hover:bg-[#3e3e3e] md:dark:border-[#444]
                        '><RiShareForwardLine className='mr-2 text-xl'/><span className='font-roboto md:font-medium text-sm font-normal'>Share</span></button>

                        <button className='md:bg-myGray flex flex-col md:flex-row md:icon_hover md:px-5 py-2 rounded-[20px]  items-center color-white 
                        md:dark:bg-[#333] md:dark:hover:bg-[#3e3e3e] dark:text-white md:dark:border-[#444]
                        '><TfiDownload className='mr-2 md:text-lg'/><span className='font-roboto md:font-medium text-sm'>Download</span></button>
                        
                        <button className='md:bg-myGray icon_hover p-3 rounded-full dark_button'><HiOutlineDotsHorizontal /></button>
                    </div>
                </div>
            </div>
            <div className={`w-full flex_col_view justify-start relative dark_button mb-4 bg-myGray rounded-xl p-3 overflow-hidden ${showMore ? 'h-auto' : 'h-[105px]'}`}>
                <div className='row_view'>
                    <h6 className='font-roboto mr-3 font-medium text-sm'>{parseInt(data?.viewCount).toLocaleString()} <span className='text-[13px]'>Views</span></h6>
                    <h6 className='font-roboto font-medium text-sm'>{data?.publishDate}</h6>
                </div>
                <p className='font-roboto dark:text-white font-[400] text-[#555] text-sm'>
                    {data?.description}<br/>
                    <button onClick={() => handleShowLess()} className='font-roboto font-bold'>Show less</button>
                </p>
                {showMore ? null : <div onClick={() => handleShowMore()} className='absolute bottom-0 right-0 cursor-pointer flex items-end justify-end w-full h-full'>
                    <span className='backdrop-blur-xl rounded-[9px] p-1'>Show more</span>
                </div>}
            </div>
            <div className='w-full flex_col_view justify-start dark:bg-mainBlack dark:text-white'>
                <h3 className='font-roboto mb-5'>{comments?.commentsCount} Comments:</h3>
                <div className='row_view w-full mb-8'>
                    <img src="/me.jpg" alt="me" className='w-[48px] h-[44px] rounded-full mr-3 object-cover object-top'/>
                    <input type="text" placeholder='Add a comment' className='bg-transparent border-b-[1px] p-1 w-full outline-none dark:border-[#3e3e3ec9]'/>
                </div>
                <div className='w-full flex_col_view justify-start'>
                    {comments?.data?.map((comment, index) => (
                        <Comment comment={comment} key={index}/>
                    ))}
                </div>
            </div>
        </div>
        <div className='flex_col_view dark:bg-mainBlack sm:w-[30%] w-full'>
            <Relatedvideos />
        </div>
    </div>
    )
}

export default Videodetails