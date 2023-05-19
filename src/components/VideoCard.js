import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {title,channelTitle,thumbnails}=snippet;
    return (
    <div className='m-2 p-2 border rounded-lg w-72 shadow-lg'>
        <img className='rounded-lg'src={thumbnails.medium.url} alt="Thumbnails" />
        <p className='font-bold'>{title}</p>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount} views</p>
    </div>
  )
}

export const AdVideoCard = ({ info }) => {
    return (
      <div className="p-1 m-1 border border-red-900 ">
        <VideoCard info={info} />
      </div>
    );
  };

export default VideoCard