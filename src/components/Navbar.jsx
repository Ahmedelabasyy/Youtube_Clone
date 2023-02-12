import React, { useRef, useState } from 'react'
import logo from '../assets/you.png';
import user from '../assets/me.jpg';
import {IoIosMenu, IoIosSearch, IoIosNotificationsOutline} from 'react-icons/io';
import {BsMicFill, BsMoonStars} from 'react-icons/bs';
import {MdOutlineLightMode} from 'react-icons/md';
import {IoVideocamOutline} from 'react-icons/io5';
import { useDarkMode } from '../hook/useDarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar, toggleTheme } from '../features/slices/themeSlice';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const {sideBar} = useSelector(state => state.theme);
    const [otherTheme] = useDarkMode();
    console.log("other theeemee", otherTheme);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let searchValue = useRef();
    
    const handleTheme = () => {
        dispatch(toggleTheme(otherTheme));
    }

    const handleSideBar = () => {
        dispatch(toggleSideBar(!sideBar));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/:${searchValue.current.value}`)
        e.target.reset();
    }

    return (
        <nav className='sticky z-[999] top-0 smooth_transition bg-white py-2 px-4 flex flex-row justify-between items-center dark:bg-mainBlack'>
            <div className='flex items-center'>
                <div className='p-2 sm:block hidden cursor-pointer mr-4 rounded-full icon_hover dark:hover:bg-[#303030]'>
                <IoIosMenu onClick={() => handleSideBar()} className='text-[26px] dark:text-white'/>
                </div>
                <Link to="/" className='flex items-center'>
                    <img className='w-[31px] h-[21px] mr-1' src={logo} alt="logo" />
                    <h2 className='font-roboto font-bold text-xl tracking-[-1.1px] dark:text-white'>YouTube<sup className='font-normal top-[-13px] mb-4 text-gray-500 text-[10px] dark:text-gray-400'>EG</sup></h2>
                </Link>
            </div>
            
            <div className='md:flex hidden flex-row  mx-3'>

                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-row items-center'>
                    <input type="text" ref={searchValue} className='md:w-[300px] border border-gray-300 bg-transparent py-2 px-4 rounded-l-3xl outline-none dark:border-[#444] dark:text-white' placeholder='Search'/>
                    <button type='submit' className='bg-myGray icon_hover h-[42px] py-2 px-5 border rounded-r-3xl after_label after:content-["Search"] after:left-[0px] dark:border-[#444] dark:bg-[#272727] z-[999]'>
                        <IoIosSearch className='text-black text-2xl dark:text-white'/>
                    </button>
                </form>

                <div className='sm:flex hidden items-center justify-center bg-myGray p-3 rounded-full ml-3 icon_hover cursor-pointer after_label after:content-["Search\a0with\a0your\a0voice"] dark:bg-[#222] dark:hover:bg-[#303030]'>
                    <BsMicFill  className='dark:text-white'/>
                </div>
            </div>

            <ul className='list-none md:w-[160px] w-[200px] flex flex-row justify-between items-center'>
                <li className='md:hidden  font-normal cursor-pointer after_label after:content-["Search"] rounded-full p-2 icon_hover dark_icon_hover'><IoIosSearch className='sm:text-2xl dark:text-[#CACACA]'/></li>
                
                {otherTheme === "dark" ? <li className='after_label after:content-["Apperance"] rounded-full p-2 icon_hover dark_icon_hover'><BsMoonStars onClick={() => handleTheme()} className='sm:text-xl cursor-pointer dark:text-[#CACACA]'/></li> : <li className='after_label after:content-["Apperance"] rounded-full p-2 icon_hover dark_icon_hover'><MdOutlineLightMode onClick={() => handleTheme()} className='sm:text-xl cursor-pointer dark:text-[#CACACA]'/></li>}
                
                <li className='after_label after:content-["Create"] rounded-full p-2 icon_hover dark_icon_hover'><IoVideocamOutline className='sm:text-2xl cursor-pointer dark:text-[#CACACA] '/></li>
                <li className='after_label after:content-["Notification"] rounded-full p-2 icon_hover dark_icon_hover'><IoIosNotificationsOutline className='sm:text-2xl cursor-pointer dark:text-[#CACACA]'/></li>
                <li><img src={user} alt="user" className='rounded-full w-[32px] ml-2 h-[32px] cursor-pointer object-cover object-top'/></li>
            </ul>
        </nav>
    )
}

export default Navbar