import {NavLink} from 'react-router-dom';

import {HiHome} from 'react-icons/hi';
import {HiOutlineSignal} from 'react-icons/hi2';
import {IoMusicalNoteOutline} from 'react-icons/io5';
import {GiSmallFire} from 'react-icons/gi';
import {SiAirplayvideo} from 'react-icons/si';
import {TfiCup} from 'react-icons/tfi';
import {SlLike, SlGameController} from 'react-icons/sl';
import {VscHistory} from 'react-icons/vsc';
import {MdOutlineSubscriptions, MdOutlineWatchLater, MdOutlineVideoLibrary, MdOutlineSlowMotionVideo} from 'react-icons/md';
import { useSelector } from 'react-redux';

const SideMenu = () => {
    const {sideBar} = useSelector(state => state.theme);

    return (
        <div className='smooth_transition z-[999] bg-white  dark:bg-mainBlack fixed top-[58px] h-[100vh] w-[240px] px-[15px]'>
            <ul className='font-roboto list-none column_view border-b-[1px] dark:border-b-[#303030] py-3 dark:text-[#f1f1f1]'>
                <li className='w-full'>
                    <NavLink className="row_view rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover" to="/">
                        <HiHome className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Home</span>
                    </NavLink>
                </li>

                <li className="row_view w-full cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover" to="/shorts">
                    <MdOutlineSlowMotionVideo className='text-[22px] mr-6'/>
                    <span className='font-normal text-[15px]'>Shorts</span>
                </li>

                <li className="row_view w-full cursor-pointer ease-in-out  rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover" to="/subscriptions">
                    <MdOutlineSubscriptions className='text-[22px] mr-6'/>
                    <span className='font-normal text-[15px]'>Subscriptions</span>
                </li>
            </ul>

            <ul className='font-roboto list-none column_view border-b-[1px] dark:border-b-[#303030] py-3 dark:text-[#f1f1f1]'>
                <li className="row_view w-full cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover" to="/library">
                    <MdOutlineVideoLibrary className='text-[22px] mr-6'/>
                    <span className='font-normal text-[15px]'>Library</span>
                </li>

                <li className='w-full'>
                    <NavLink className="row_view rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover" to="/history">
                        <VscHistory className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>History</span>
                    </NavLink>
                </li>

                <li className='w-full row_view cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover'>
                        <MdOutlineSubscriptions className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Subscriptions</span>
                </li>

                <li className='w-full row_view cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover'>
                        <SiAirplayvideo className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Your videos</span>
                </li>

                <li className='w-full row_view cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover'>
                        <MdOutlineWatchLater className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Watch later</span>
                </li>

                <li className='w-full row_view cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover'>
                        <SlLike className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Liked videos</span>
                </li>
            </ul>

            <ul className='font-roboto list-none column_view py-3 dark:text-[#f1f1f1]'>
                <h3 className='font-roboto w-full py-2'>Explore</h3>
                <li className='w-full'>
                        <NavLink to="/trending" className="row_view  rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover">
                            <GiSmallFire className='text-[22px] mr-6'/>
                            <span className='font-normal text-[15px]'>Trending</span>
                        </NavLink>
                </li>

                <li className='w-full row_view cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover'>
                        <IoMusicalNoteOutline className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Music</span>
                </li>

                <li className='w-full row_view cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover'>
                        <HiOutlineSignal className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Live</span>
                </li>

                <li className='w-full row_view cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover'>
                        <SlGameController className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Gaming</span>
                </li>

                <li className='w-full row_view cursor-pointer rounded-lg px-3 py-2 sideIcon_hover dark_icon_hover'>
                        <TfiCup className='text-[22px] mr-6'/>
                        <span className='font-normal text-[15px]'>Sports</span>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu