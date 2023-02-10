import { useSelector } from 'react-redux';
import {HiHome} from 'react-icons/hi';
import {MdOutlineVideoLibrary, MdOutlineHistory} from 'react-icons/md';
import {GiSmallFire} from 'react-icons/gi';
import {NavLink, useParams } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className='bg-white smooth_transition dark:bg-mainBlack hidden md:block fixed lef-0 top-[58px] h-[100vh] w-[72px] px-[4px]'>
                <ul className='list-none flex flex-col mt-4 dark:text-white font-normal'>
                    <li>
                        <NavLink className="column_view p-4 rounded-lg sideIcon_hover dark_icon_hover" to="/"><HiHome className='text-2xl mb-[5px]'/> <span className='text-[10px] font-roboto'>Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink className="column_view p-4 rounded-lg sideIcon_hover dark_icon_hover" to="/trending"><GiSmallFire className='text-xl mb-[5px]'/> <span className='text-[10px] font-roboto'>Trending</span></NavLink>
                    </li>
                    <li>
                        <NavLink className="column_view p-4 rounded-lg sideIcon_hover dark_icon_hover" to="/history"><MdOutlineHistory className='text-2xl mb-[5px]'/> <span className='text-[10px] font-roboto'>History</span></NavLink>
                    </li>
                        <li className="column_view p-4 rounded-lg sideIcon_hover dark_icon_hover"><MdOutlineVideoLibrary className='text-2xl mb-[5px]'/> <span className='text-[10px] font-roboto'>Library</span></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;