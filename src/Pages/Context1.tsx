import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
export const Content1 = () => {
  const contentItems = [
    {
      imgSrc: '/content2.jpg',
      title: 'Unique discount services',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content1.jpg',
      title: 'Events',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bgg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content1.jpg',
      title: 'Events',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bgg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
  
  ];

  return (
    <div className='relative w-screen h-screen mx-auto items-center justify-center flex'>
      <div className='items-center justify-between w-[93%] mx-auto flex'>
        <div className='pink-bg rounded-[100%] p-[1vw] cursor-pointer hover:bg-red-100'>
          <FaAngleLeft className='text-red-500'/>
        </div>
        <div className='w-[84.9%] mx-auto flex items-center gap-[4vw] flex-col'>
          <div className='text-center flex-col flex gap-[0.8vw]'>
            <h1 className='font-bold text-black text-[2vw]'>Categories</h1>
            <div className='text-[0.7vw] text-[#524b4b] w-[40%] mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro dolores nihil minus aperiam, eum quam, earum expedita, aspernatur suscipit ex? Atque, nesciunt vel quibusdam reprehenderit animi pariatur temporibus debitis?
            </div>
          </div>
          <div className='flex gap-[2vw] items-censter max-w-full overflow-hidden'>
            {contentItems.map((item, index) => (
              <div key={index} className={`h-[21vw] w-[25vw] ${item.bgColor} rounded-[1vw]`}>
                <div className='flex flex-col gap-[0.5vw] w-[25vw] h-[13vw] items-center rounded-[2vw]'>
                  <img src={item.imgSrc} alt="image for event" className='rounded-[1vw] h-[12vw] w-full object-cover' />
                  <div className='flex items-start flex-col justify-center gap-[0.1vw] mx-[1vw]'>
                    <h1 className='font-bold text-[1.3vw]'>{item.title}</h1>
                    <div className='text-[0.7vw] text-[#524b4b]'>{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='pink-bg rounded-[100%] p-[1vw] cursor-pointer hover:bg-red-100'>
          <FaAngleRight className='text-red-500'/>
        </div>
      </div>
    </div>
  );
};
