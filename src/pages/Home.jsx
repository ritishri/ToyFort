import React from 'react'

function Home() {
  return (
    <div className='p-4'>
        <h1 className='flex justify-center items-center font-bold text-xl font-sans tracking-widest'>SHOP BY AGE</h1>

        <div className='flex flex-row'>
            <img className='w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer' src='https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/1.png'/>
            <img className='w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer' src='https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/2.png'/>
            <img className='w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer' src='https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/3.png'/>
            <img className='w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer' src='https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/4.png'/>
            <img className='w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer' src='https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/5.png'/>
            <img className='w-48 h-48 m-7 transform transition duration-200 hover:scale-110 cursor-pointer' src='https://toyfort.s3.ap-south-1.amazonaws.com/uploads/assets/6.png'/>
        </div>
    </div>
  )
}

export default Home