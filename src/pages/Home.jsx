import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetVideosByCategoryQuery } from '../features/slices/youtubeV3Slice'
import Slider from "react-slick";
import { Error, Genre, Loader, VideoCard } from '../components';
import { useSelector } from 'react-redux';

const Home = () => {
    let {selectedGenre} = useSelector(state => state.states);
    console.log("genreeeeeee issss ", selectedGenre);
    const {data, isFetching, error} = useGetVideosByCategoryQuery(selectedGenre);
    console.log("data", data);

    let genres = ["All" ,"Sales", "Gaming", "English","Freestyle", "World","cup", "Graphic", "Design", "Football", "Music", "Play", "Cry", "speed", "food", "water", "Song", "Go", "Trade", "Invest", "Money"]

    var settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
    ]
    }

    if(isFetching) return <Loader title={selectedGenre}/>
    if(error) return <Error />

    return (
        <section className='section_margin section_padding py-4 bg-white dark:bg-mainBlack smooth_transition'> 
            <div className='w-full overflow-hidden mb-8'>
                <Slider {...settings}>
                    {genres.map((genre, index) => (
                        <div key={index} className='w-full mx-2'>
                            <Genre genre={genre} index={index} />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='w-full overflow-hidden flex items-center justify-center md:justify-between flex-wrap'>
                {data?.data?.map((video, i) => (
                    <VideoCard key={i} video={video} i={i}/>
                ))}
            </div>
        </section>
    );
};

export default Home