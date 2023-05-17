import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map(video=><VideoCard key={video.id} info={video}/>)}
    </div>
  );
};

export default VideoContainer;
//items[0].snippet.title