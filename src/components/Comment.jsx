import React from 'react'
import {HiOutlineHandThumbDown, HiOutlineHandThumbUp} from 'react-icons/hi2';


const Comments = ({comment}) => {
    return (
        <div className='w-full flex items-start justify-start mb-5 '>
            <img src={comment?.authorProfileImageUrl[0]?.url} alt="user" className='rounded-full mr-4 w-[40px] h-[40px]'/>
            <div className='flex_col_view justify-start w-full'>
                <h6 className='font-roboto font-[500] text-sm mb-1'>{comment?.authorDisplayName} <span className='text-darkerGray text-xs font-normal mb-1'>. {comment?.publishedTimeText}</span> </h6>
                <p className='font-roboto font-[400] text-[14px] mb-2'>{comment?.textDisplay}</p>
                <div className='row_view'>
                    <div className='row_view'><HiOutlineHandThumbUp className='text-xl mr-1 cursor-pointer text-black/75 dark:text-white/80'/> <span className='text-xs font-sm text-darerkGray'>{comment?.likesCount}</span></div>
                    <HiOutlineHandThumbDown className='ml-3 text-xl cursor-pointer text-black/75 dark:text-white/80'/>
                    <span className='ml-5 font-roboto text-xs font-medium'>Reply</span>
                </div>
            </div>
        </div>
    )
}

export default Comments