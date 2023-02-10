import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetRelatedVideosQuery } from '../features/slices/youtubeV3Slice';
import Videorow from './Videorow';

const Relatedvideos = () => {
    const {id} = useParams();
    console.log(id);
    const {data} = useGetRelatedVideosQuery(id, { refetchOnMountOrArgChange: true });
    console.log("relatedd", data);

    return (
        <>
            {data?.data?.map((data,i) => (
                <Videorow key={i} data={data}/>
            ))}
        </>
        
    )
}

export default Relatedvideos