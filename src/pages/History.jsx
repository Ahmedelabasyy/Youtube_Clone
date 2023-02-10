import React from 'react';
import {IoIosSearch} from 'react-icons/io';
import {IoPauseCircleOutline, IoSettingsOutline} from 'react-icons/io5';
import {HiOutlineTrash} from 'react-icons/hi';
import { useSelector } from 'react-redux';
import Videorow from '../components/Videorow';

const History = () => {
  const {playedVideos} = useSelector(state => state.states);
  console.log("playedVideos", playedVideos);
  return (
    <section className='min-h-[92.3vh] section_margin dark:bg-mainBlack smooth_transition'>
      <div className='w-full overflow-hidden truncate px-6 py-6 flex_col_view justify-start md:flex-row md:justify-between'>
        <div className='order-2 md:order-1 w-full lg:w-2/3 px-4'>
          <h2 className='font-roboto font-medium mb-6 dark:text-notWhite'>Watch history</h2>
          {playedVideos && playedVideos?.map(data => (
            <Videorow data={data} />
          ))}
        </div>
        <div className='order-1 md:order-2 w-full lg:w-1/3 mb-2 lg:fixed static right-[40px]'>
          <form className='w-full lg:w-2/3 mb-4 row_view py-2 border-b-[1px] border-black dark:border-[#444]'>
            <IoIosSearch className='text-[#424242] text-[25px] mr-2 dark:text-notWhite'/>
            <input type="text" className='w-full bg-transparent lg:w-2/3 outline-none dark:caret-notWhite' placeholder='Search watch history'/>
          </form>
          <div className='hidden md:block'>
            <ul className='mb-4'>
              <li className='font-medium font-roboto border-b-[1px] p-3 dark:text-notWhite dark:border-[#444]'>History type</li>
              <li className='flex_row_view justify-between border-b-[1px] p-3 dark:text-notWhite dark:border-[#444]'>
                <p>Watch history</p>
                <input type="radio" className='mt-1' defaultChecked/>
              </li>
              <li className='flex_row_view justify-between border-b-[1px] p-3 dark:text-notWhite dark:border-[#444]'>
                <p>Community</p>
                <input type="radio" className='mt-1' disabled/>
              </li>
            </ul>
            <div className='flex_col_view font-roboto text-[15px]'>
              <button className='row_view icon_hover dark_icon_hover px-3 py-2 rounded-[40px] mb-3 dark:text-notWhite'>
                <HiOutlineTrash className='text-xl mr-2'/>
                <span>Clear all watch history</span>
              </button>
              <button className='row_view icon_hover dark:text-notWhite dark_icon_hover px-3 mb-3 py-2 rounded-[40px]'>
                <IoPauseCircleOutline className='text-xl mr-2'/>
                <span>Pause watch history</span>
              </button>
              <button className='row_view icon_hover dark:text-notWhite dark_icon_hover px-3 py-2 rounded-[40px]'>
                <IoSettingsOutline className='text-xl mr-2'/>
                <span>Manage all history</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History