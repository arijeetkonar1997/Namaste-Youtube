import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='border shadow-lg col-span-11'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer;