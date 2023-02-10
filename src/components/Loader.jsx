import React from 'react'

const Loader = ({title}) => {
    return (
        <div className="w-full h-[100vh] column_view bg-white dark:bg-mainBlack">
            <h2 className='font-roboto text-darkerGray dark:text-myGray'>Loading {title} results please wait ...</h2>
        </div>
    )
}

export default Loader