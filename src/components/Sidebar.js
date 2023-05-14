import React from 'react'

const Sidebar = () => {
  return (
    <div className='border shadow-lg col-span-1 p-3'>
    <ul>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
    </ul>
    <div className='my-5'>
    <h1 className='text font-bold'>Subscriptions</h1>
    <ul>
        <li>Ankur Warikoo</li>
        <li>Ranveer Allahbadia</li>
        <li>Code With Harry</li>
        <li>Technical Suneja</li>
        <li>Asset Yogi</li>
        <li>Flying Beast</li>
        <li>The Bong Guy</li>
        <li>Unwrap Zindagi</li>
        <li>Huberman Lab</li>
    </ul>
    </div>

    <div className='my-5'>
    <h1 className='text font-bold'>Explore</h1>
    <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>News</li>
        <li>Gaming</li>
    </ul>
    </div>

    <div className='my-5'>
    <h1 className='text font-bold'>More from Youtube</h1>
    <ul>
        <li>Youtube Premium</li>
        <li>Youtube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
    </ul>
    </div>
    </div>
  )
}

export default Sidebar;