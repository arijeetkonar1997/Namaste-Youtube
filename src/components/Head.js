import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-2'>
            <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxWzc3zQIw57gdf7ykiYLna0jQrW9v07WTg&usqp=CAU" alt="burger-icon" />
            <img className='h-12 mx-2'  src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="youtube-icon" />
        </div>
        <div className='col-span-9 pt-2'>
            <input className='w-1/2 border rounded-l-full ml-20 mr-0 border-gray-400'type="text" />
            <button className='border rounded-r-full border-gray-400 px-2 ml-0'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='h-7 pt-3' src="https://cdn-icons-png.flaticon.com/512/709/709722.png" alt="user-icon" />
        </div>
    </div>
  )
}

export default Head;