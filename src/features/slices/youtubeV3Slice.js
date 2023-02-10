import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const youtubeV3 = createApi({
    reducerPath: 'youtubeV3',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://youtube-v3-alternative.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'f7f9e17c81msh28bf49cda9c755bp19f75bjsn8adefba27e02');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getVideosByCategory: builder.query({query: (query) => `/search?query=${query}`}),
        getVideoDetails: builder.query({query: (id) => `/video?id=${id}`}),
        getChannelDetails: builder.query({query: (id) => `/channel?id=${id}`}),
        getVideoComments: builder.query({query: (id) => `/comments?id=${id}`}),
        getRelatedVideos: builder.query({query: (id) => `/related?id=${id}`}),
        getTrendingVideos: builder.query({query: (country) => `/trending?geo=${country}`}),
    }),
});

export const {
    useGetVideosByCategoryQuery,
    useGetVideoDetailsQuery,
    useGetChannelDetailsQuery,
    useGetRelatedVideosQuery,
    useGetVideoCommentsQuery,
    useGetTrendingVideosQuery,
} = youtubeV3;