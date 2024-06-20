import React from 'react'

export const Content1 = () => {
  return (
    <div className='relative w-screen h-screen  mx-auto items-center justfiy-center flex '>
      <div className='w-[80%] mx-auto flex items-center gap-[4vw] flex-col'>
        <div className='text-center flex-col flex gap-[0.8vw]'>
          <h1 className='font-bold text-black text-[2vw]'>Categories</h1>
          <div className='text-[0.7vw] text-gray-500 w-[40%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro dolores nihil minus aperiam, eum quam, earum expedita, aspernatur suscipit ex? Atque, nesciunt vel quibusdam reprehenderit animi pariatur temporibus debitis?</div>
        </div>
        <div className='flex gap-[2vw] items-center '>

          <div className='h-[21vw] w-[25vw] pink-bg rounded-[1vw]'>
            <div className=' flex flex-col gap-[0.5vw] w-[25vw] h-[13vw] items-center rounded-[2vw]'>
              <img src="/content2.jpg" alt="imagefor event" className='rounded-[1vw] h-[12vw] w-full object-cover' />
              <div className='flex items-start flex-col justify-center   gap-[0.1vw] mx-[1vw]'>
                <h1 className='font-bold text-[1.3vw]'>Unique discount services</h1>
                <div className='text-[0.7vw] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta  </div>
              </div>
            </div>
          </div>
          <div className='h-[21vw] w-[25vw] pink-bgg rounded-[1vw]'>
            <div className=' flex flex-col gap-[0.5vw] w-[25vw] h-[13vw] items-center rounded-[2vw]'>
              <img src="/content1.jpg" alt="imagefor event" className='rounded-[1vw] h-[12vw] w-full' />
              <div className='flex items-start flex-col justify-center   gap-[0.1vw] mx-[1vw]'>
                <h1 className='font-bold text-[1.3vw]'>Events</h1>
                <div className='text-[0.7vw] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta  </div>
              </div>
            </div>
          </div>
          <div className='h-[21vw] w-[25vw] pink-bg rounded-[1vw]'>
            <div className=' flex flex-col gap-[0.5vw] w-[25vw] h-[13vw] items-center rounded-[2vw]'>
              <img src="/content3.jpg" alt="imagefor event" className='rounded-[1vw] h-[12vw] w-full' />
              <div className='flex items-start flex-col justify-center   gap-[0.1vw] mx-[1vw]'>
                <h1 className='font-bold text-[1.3vw]'>Products</h1>
                <div className='text-[0.7vw] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
