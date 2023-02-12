import trending from '../assets/trending_avatar.png';
import { useGetTrendingVideosQuery } from '../features/slices/youtubeV3Slice';
import { Error, Loader } from '../components';
import {Videorow} from '../components';

const Trending = () => {
    const myUl = [ "Music", "Gaming", "Movies"]
    const {data, isFetching, error} = useGetTrendingVideosQuery("EG");
    console.log("countryyyyyy", data);

    if(isFetching) return <Loader title="Video"/>
    if(error) return <Error />


    return (
        <div className='text-black section_margin dark:bg-mainBlack h-full smooth_transition'>
            <div className='md:px-[80px] sm:px-[60px] px-[30px] py-5'>
                <div className='row_view mb-4'>
                    <img src={trending} alt="avatar" className='mr-5 w-[80px] h-[80px]'/>
                    <h2 className='font-roboto text-[24px] dark:text-white'>Trending</h2>
                </div>

                <div className='w-full border-b-[1px] border-darkGray dark:border-[#333] mb-6 overflow-hidden'>
                    <ul className='flex_row_view justify-between list-none sm:w-1/5 w-4/6 '>
                        <li className='font-roboto font-medium text-black cursor-pointer border-b-2 border-darkerGray px-7 py-3 h-full dark:text-white dark:border-darkerGray'>Now</li>
                        {myUl.map((li, i) => (
                            <li className='font-roboto font-medium px-7 py-3 text-darkerGray cursor-pointer dark:text-light' key={i}>{li}</li>
                        ))}
                    </ul>
                </div>

                <div className='flex_col_view justify-start py-2 max-w-full'>
                    {data?.data?.map((trend, i) => (
                        <Videorow key={i} data={trend}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trending;