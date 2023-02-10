import React from 'react'
import { useDispatch } from 'react-redux'
import { getSelectedGenre } from '../features/slices/statesSlice';

const Genre = ({genre, index}) => {
    const dispatch = useDispatch();
    const handleGenre = () => {
        dispatch(getSelectedGenre(genre));
    }
    return (
        <>
            <h3 onClick={() => handleGenre()} className='font-roboto text-[15px] px-3 py-[5px] bg-myGray rounded-md w-fit cursor-pointer icon_hover dark:hover:bg-[#3e3e3e] dark:text-myGray dark:bg-[#303030]'>{genre}</h3>
        </>
    )
}

export default Genre